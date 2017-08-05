module.exports = {
    /**
     * Store the REST API routes map.
     *
     * @var {object}
     */
    map: JSON.parse(require('../map.json.js')),

    /**
     * Store the base REST API URL.
     *
     * @var {string|bool}
     */
    baseURL: '',

    /**
     * Return the url for a named route.
     *
     * @param  {string} route
     * @return {string|bool}
     */
    route: function (route) {
        if (! this.map[route]) {
            throw 'Could not find route in map with name "'+route+'".';
            return false;
        }
    
        return this.baseURL + '/' + this.map[route];
    }
};