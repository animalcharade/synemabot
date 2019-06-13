const path = require('path');
const autoload = require('auto-load');

module.exports = autoload(path.join(__dirname, 'functions'));
