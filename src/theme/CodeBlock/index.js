import React, {isValidElement, useEffect} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ElementContent from '@theme/CodeBlock/Content/Element';
import StringContent from '@theme/CodeBlock/Content/String';
/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */
function maybeStringifyChildren(children) {
  if (React.Children.toArray(children).some((el) => isValidElement(el))) {
    return children;
  }
  // The children is now guaranteed to be one/more plain strings
  return Array.isArray(children) ? children.join('') : children;
}

function mergeMatchingSiblings() {
  // All code blocks follow this pattern:
  // code span.token-line > span.token
  const parentSpans = document.querySelectorAll('code span.token-line');

  parentSpans.forEach(parentSpan => {
    const childSpans = parentSpan.querySelectorAll('* > span.token');

    // Single spans are special cases that we don't need to make editable
    // Docusaurus tries to parse code blocks and put related tokens together into separate <span> elements.
    // If a token line includes a single span, it's usually because the code block is a paragraph of text. 
    if (childSpans.length === 1) return;

    let mergedContent = '';
    let openAngleBrackets = 0;
    let closeAngleBrackets = 0;

    // Keep track of the elements that match /<[^>]*>/ so we can delete them later
    // and replace them with a single editable <span>
    let spansToDelete = [];

    for (let i = 0; i < childSpans.length; i++) {
      const span = childSpans[i];

      openAngleBrackets += (span.textContent.match(/</g) || []).length;
      closeAngleBrackets += (span.textContent.match(/>/g) || []).length;

      span.textContent.match(/</g) && spansToDelete.push(span);
      spansToDelete.length && spansToDelete[0].textContent.match(/</g) && spansToDelete.push(span);

      mergedContent += span.textContent;

      // For all placeholder text found in each code block line, 
      // create a new editable <span> elements to put them in 
      // and delete any span elements that the new editable one replaces.
      if (openAngleBrackets === closeAngleBrackets && mergedContent.match(/<[^>]*>/)) {
        const newSpan = document.createElement('span');
        const regexMatch = mergedContent.match(/[\s'"]?<[^>]*>[\s'"]?/)[0];
        newSpan.textContent = regexMatch;
        mergedContent = mergedContent.replace(regexMatch, '');
        newSpan.classList.add('token', 'plain');
        newSpan.style.fontWeight = 'bold'
        newSpan.style.color = '#f15d61'
        newSpan.setAttribute('contenteditable', true);
        span.parentNode.insertBefore(newSpan, span);
        // Add a cursor to show that the text is editable
        const cursor = document.createElement('span');
        cursor.textContent = '|'
        cursor.classList.add('token', 'plain', 'cursor');
        newSpan.append(cursor);
        // Delete the cursor on click so that it doesn't get copied
        span.parentNode.addEventListener('click', function(event) {
          const cursorElement = event.target.querySelector('.cursor');
          if (cursorElement) {
            cursorElement.remove();
          }
        })
        cursor.addEventListener('click', function(event) {
          event.target.remove();
        })
        for (let j = 0; j < spansToDelete.length; j++) {
          spansToDelete[j].remove();
        }
        mergedContent = '';
        openAngleBrackets = 0;
        closeAngleBrackets = 0;
        spansToDelete = [];
      }
    }
  })
}

export default function CodeBlock({children: rawChildren, ...props}) {
  // The Prism theme on SSR is always the default theme but the site theme can
  // be in a different mode. React hydration doesn't update DOM styles that come
  // from SSR. Hence force a re-render after mounting to apply the current
  // relevant styles.
  useEffect(() => {
    // Put placeholders in code blocks (<[^>*]>) in editable <span> elements.
    try {
      // Handle cases where Docusaurus splits code lines into multiple <span> elements.
      mergeMatchingSiblings();
    } catch (error) {
      console.error('An error occurred while merging matching siblings:', error);
    }
  },[])
  const isBrowser = useIsBrowser();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp =
    typeof children === 'string' ? StringContent : ElementContent;
  return (
    <CodeBlockComp key={String(isBrowser)} {...props}>
      {children}
    </CodeBlockComp>
  );
}