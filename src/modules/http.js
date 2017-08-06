const axios = require('axios');
const routing = require('./routing');

module.exports = {
    /**
     * Set axios authorization bearer token.
     *
     * @param  {string|null}  bearer
     * @return {void}
     */
    setToken(bearer) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + bearer;
    },

    /**
     * Make a http request base on named route.
     *
     * @param  {string}  route
     * @param  {array|null}  payload
     * @param  {object|null}  config
     * @return {promise}
     */
    request(route, payload = null, config = null) {
        let url = routing.route(route);
        let method = routing.method(route).toLowerCase();

        if (['post', 'put', 'patch'].includes(method)) {
            return this[method](url, payload, config);
        }

        return this[method](url, config);
    },

    /**
     * Make a http GET request.
     *
     * @param  {string}  url
     * @param  {object|null}  config
     * @return {promise}
     */
    get(url, config = null) {
        return axios.get(url, config);
    },

    /**
     * Make a http DELETE request.
     *
     * @param  {string}  url
     * @param  {object|null}  config
     * @return {promise}
     */
    delete(url, config = null) {
        return axios.delete(url, config);
    },

    /**
     * Make a http POST request.
     *
     * @param  {string}  url
     * @param  {array}  payload
     * @param  {object|null}  config
     * @return {promise}
     */
    post(url, payload, config = null) {
        return axios.post(url, payload, config);
    },

    /**
     * Make a http PUT request.
     *
     * @param  {string}  url
     * @param  {array}  payload
     * @param  {object|null}  config
     * @return {promise}
     */
    put(url, payload, config) {
        return axios.put(url, payload, config);
    },

    /**
     * Make a http PATCH request.
     *
     * @param  {string}  url
     * @param  {array}  payload
     * @param  {object|null}  config
     * @return {promise}
     */
    patch(url, payload, config) {
        return axios.patch(url, payload, config);
    }
};