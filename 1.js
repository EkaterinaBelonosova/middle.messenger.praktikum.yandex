const path = require('path');

module.exports = {
  layouts: path.join(__dirname, 'src/pages'),
  partials: path.join(__dirname, 'src/components'),
  data:  path.join(__dirname, 'src/data'),
};

handlebars.config.js