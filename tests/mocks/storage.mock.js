require('mock-local-storage');

global.window = {};
window.localStorage = global.localStorage;

module.exports = true;