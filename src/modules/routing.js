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
     * @param  {object}  params
     * @return {string}
     */
    route(route, params = {}) {
        if (! this.map[route]) {
            throw 'Could not find route in map with name "'+route+'".';
        }

        return this.baseURL + '/' + this.replacements(this.map[route].url, params);
    },

    /**
     * Return the url and method for a named route.
     *
     * @param  {string}  route
     * @param  {object}  params
     * @return {object}
     */
    entry(route, params = {}) {
        return {
            method: this.method(route),
            url: this.route(route, params)
        };
    },

    /**
     * Parameter replacements.
     *
     * @param  {string}  url
     * @param  {object|null}  params
     * @return {object}
     */
    replacements(url, params = {}) {
        let replaced = url.replace(/{([^}]+)}/g, function (match) {
            let optional = match.includes('?');
            match = match.replace(/{|}/g, '');

            if (params.hasOwnProperty(match)) {
                return params[match];
            } else if (! optional) {
                throw 'Missing parameter {' + match + '} for ' + url;
            }

            return '';
        });

        return replaced.replace(/\/$/, '');
    }
};
