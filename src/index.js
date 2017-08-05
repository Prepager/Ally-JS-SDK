/**
 * Create the Laravel Ally wrapper.
 *
 * @var {object}
 */
let Ally = {};

/**
 * Require the package modules.
 */
Ally.http = require('./modules/http');
Ally.routing = require('./modules/routing');

/**
 * Require the package helpers.
 */
require('./helpers');

/**
 * Export the Ally wrapper
 *
 * @var {object}
 */
module.exports = Ally;