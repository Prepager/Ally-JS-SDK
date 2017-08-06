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
 * Require the package actions.
 */
Ally.auth = require('./actions/auth');

/**
 * Export the Ally wrapper
 *
 * @var {object}
 */
module.exports = Ally;