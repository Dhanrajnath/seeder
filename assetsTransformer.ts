const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    const transformedCode = 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
    return { code: transformedCode };
  },
};
