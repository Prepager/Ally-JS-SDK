const routing = require('./modules/routing');

/**
 * Alias for Ally.routing.route().
 *
 * @param  {object}  ...args
 * @return {string}
 */
window.route = function(...args) {
    return routing.route(...args);
}
