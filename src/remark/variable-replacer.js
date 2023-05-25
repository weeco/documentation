const visit = require('unist-util-visit');

// Replace all occurrences of VAR::varName with the value of varName.
const plugin = (options) => {
  const transformer = async (ast) => {
    // Do a find and replace on the following nodes in the tree.
    // For a list of all available nodes, see https://github.com/syntax-tree/mdast#nodes.
    visit(ast, ['code','inlineCode','heading','link','text'], (node) => {
      // Replace link URLs
      if (node.type == 'link') {
        node.url = node.url.replace(/VAR::([A-Z0-9_]+)/g, (match, varName) => {
          return options.replacements[varName] || match;
        });
      }
      // Replace any child elements.
      // Child elements appear in nodes such as heading and link.
      if (!node.value) {
        if (node.children.length > 0) {
          for (let i = 0; i < node.children.length; i++) {
            if (!node.children[i].value) return
            node.children[i].value = node.children[i].value.replace(/VAR::([A-Z0-9_]+)/g, (match, varName) => {
                return options.replacements[varName] || match;
              })
          }
        } 
      } else {
        node.value = node.value.replace(/VAR::([A-Z0-9_]+)/g, (match, varName) => {
          return options.replacements[varName] || match;
        });
      }
    });
  };
  return transformer;
};

module.exports = plugin;