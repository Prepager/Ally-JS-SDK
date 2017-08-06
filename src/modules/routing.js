const map = require('../map.json.js');

module.exports = {
    /**
     * Store the REST API routes map.
     *
     * @var {object}
     */
    map: JSON.parse(map),

    /**
     * Store the base REST API URL.
     *
     * @var {string|bool}
     */
    baseURL: '',

    /**
     * Return the method for a named route.
     *
     * @param  {string} route
     * @return {string}
     */
    method(route) {
        if (! this.map[route]) {
            throw 'Could not find route in map with name "'+route+'".';
        }
    
        return this.map[route].method;
    },

    /**
     * Return the url for a named route.
     *
     * @param  {string} route
     * @return {string}
     */
    route(route) {
        if (! this.map[route]) {
            throw 'Could not find route in map with name "'+route+'".';
        }

        return this.baseURL + '/' + this.map[route].url;
    },

    /**
     * Return the url and method for a named route.
     *
     * @param  {string}  route
     * @return {array}
     */
    entry(route) {
        return {
            method: this.method(route), 
            url: this.route(route)
        };
    }
};