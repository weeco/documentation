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

function handleSingleSpans(spanElement) {
  if (!spanElement || !spanElement.textContent) {
    return;
  }
  const html = spanElement.innerHTML;
  const regex = /(&lt;[^&]*&gt;)/g;
  const matches = html.match(regex) || [];
  let index = 0;
  let wrappedHtml = "";
  for (const match of matches) {
    const start = html.indexOf(match, index);
    const end = start + match.length;
    if(html.substring(index, start).match(/<span/g)) break
    wrappedHtml += html.substring(index, start) + `<span contenteditable="true" class="editable cursor" data-type=${match.trim()} onclick="this.classList.remove('cursor')">${match}</span>`;
    index = end;
  }
  wrappedHtml += html.substring(index);
  spanElement.innerHTML = wrappedHtml;
}

function mergeMatchingSiblings() {
  // All code blocks follow this pattern:
  // code span.token-line > span.token
  const parentSpans = document.querySelectorAll('code > span.token-line');

  parentSpans.forEach(parentSpan => {
    const childSpans = parentSpan.querySelectorAll('* > span.token');

    let mergedContent = '';
    let openAngleBrackets = 0;
    let closeAngleBrackets = 0;

    // Keep track of the elements that match /<[^>]*>/ so we can delete them later
    // and replace them with a single editable <span>
    let spansToDelete = [];

    for (let i = 0; i < childSpans.length; i++) {
      const span = childSpans[i];

      // stop if a single span matches the placeholder pattern.
      // this case is handled in handleSingleSpans
      if (span.textContent.match(/<[^>]*>/)){
        handleSingleSpans(span)
        return
      }

      openAngleBrackets += (span.textContent.match(/</g) || []).length;
      closeAngleBrackets += (span.textContent.match(/>/g) || []).length;

      span.textContent.match(/[\s'"]?</g) && spansToDelete.push(span);
      spansToDelete.length && spansToDelete[0].textContent.match(/[\s'"]?</g) && spansToDelete.push(span);

      mergedContent += span.textContent;

      // For all placeholder text found in each code block line, 
      // create a new editable <span> elements to put them in 
      // and delete any span elements that the new editable one replaces.
      if (openAngleBrackets === 1 && openAngleBrackets === closeAngleBrackets && mergedContent.match(/<[^>]*>/)) {
        const newSpan = document.createElement('span');
        var regexMatch = mergedContent.match(/[\s'"]?<[^>]*>[\s'"]?/)[0];
        newSpan.textContent = regexMatch;
        mergedContent = mergedContent.replace(regexMatch, '');
        newSpan.classList.add('editable', 'cursor');
        newSpan.setAttribute('contenteditable', true);
        newSpan.setAttribute('data-type', regexMatch.trim())
        newSpan.onclick = (e) => e.target.classList.remove('cursor')
        span.parentNode.insertBefore(newSpan, span);
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

function updateMatchingPlaceholdersOnInput () {
  const editablePlaceholders = document.querySelectorAll('[contenteditable="true"]');
  editablePlaceholders.forEach((placeholder) => {
    placeholder.addEventListener('input', function(event) {
      const dataType = event.target.dataset.type;
      const newText = event.target.textContent;
      document.querySelectorAll(`[data-type="${dataType}"][contenteditable="true"]`).forEach(span => {
        if (span !== event.target) {
          span.textContent = newText;
          span.classList.remove('cursor')
        }
      });
    });
  });
}

export default function CodeBlock({children: rawChildren, ...props}) {
  // The Prism theme on SSR is always the default theme but the site theme can
  // be in a different mode. React hydration doesn't update DOM styles that come
  // from SSR. Hence force a re-render after mounting to apply the current
  // relevant styles.
  useEffect(() => {
    // Put placeholders in code blocks (<[^>*]>) in editable <span> elements.
    try {
      mergeMatchingSiblings();
      updateMatchingPlaceholdersOnInput()
    } catch (error) {
      console.error('An error occurred while making placeholders editable:', error);
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
