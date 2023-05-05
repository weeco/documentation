const fs = require('fs');
const { execSync } = require('child_process');
const pandoc = require('node-pandoc');
const os = require('os');
const path = require('path');

function convertHtmlTableToAsciiDoc(htmlTable) {
  return new Promise((resolve, reject) => {
    pandoc(htmlTable, '-f html -t asciidoc', (err, result) => {
      if (err) {
        console.error(`Error converting HTML table to AsciiDoc: ${err.message}`);
        resolve(htmlTable);
      } else {
        resolve(result);
      }
    });
  });
}

function markdownToAsciidoc(markdown) {
  const tempMarkdownPath = path.join(os.tmpdir(), 'temp_markdown.md');
  fs.writeFileSync(tempMarkdownPath, markdown, 'utf-8');

  try {
    const command = `kramdoc -o - "${tempMarkdownPath}"`;
    const result = execSync(command, { encoding: 'utf-8' });

    fs.unlinkSync(tempMarkdownPath);
    return result;
  } catch (err) {
    fs.unlinkSync(tempMarkdownPath);
    console.error(`Error converting Markdown to AsciiDoc: ${err.message}`);
    return markdown;
  }
}

function processTabs(match) {
  const tabItems = [...match.matchAll(/\s?<TabItem[^>]*value="([^"]+)"[^>]*label="([^"]+)"[^>]*>([\s\S]*?)<\/TabItem>/g)];

  let result = ['\n<!--\n[tabs]'];
  result.push('=====');
  for (const tabItem of tabItems) {
    const [_, value, label, content] = tabItem;
    result.push(`${label}::`);
    result.push('+');
    result.push('--');
    const asciidocContent = markdownToAsciidoc(content.trim(), '');
    result.push(asciidocContent);
    result.push('--');
  }

  result.push('=====');
  result.push('-->');
  return result.join('\n');
}

async function convertFile(file) {
  const content = fs.readFileSync(file, 'utf-8');

  var newContent = content.replace(/<Tabs>([\s\S]*?)<\/Tabs>/g, processTabs);

  const htmlTableMatches = newContent.match(/\s?(<table>((.|\n)*?)<\/table>)/g);
  if (htmlTableMatches) {
    for (const htmlTableMatch of htmlTableMatches) {
      const tableRegex = /(<table>((.|\n)*?)<\/table>)/;
      const tableMatch = htmlTableMatch.match(tableRegex);
      if (tableMatch) {
        const htmlTable = tableMatch[0];
        const asciidocTable = await convertHtmlTableToAsciiDoc(htmlTable);
        newContent = newContent.replace(htmlTableMatch, `\n<!--\n${asciidocTable}\n-->`);
      }
    }
  }

  fs.writeFileSync(file, newContent, 'utf-8');
}

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('No input file provided');
  process.exit(1);
}

convertFile(inputFile).catch((error) => {
  console.error(`Error processing file: ${error.message}`);
  process.exit(1);
});
