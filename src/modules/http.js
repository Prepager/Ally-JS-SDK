const axios = require('axios');

module.exports = {
    /**
     * Make a http GET request.
     *
     * @param  {string}  url
     * @param  {object|null}  config
     * @return {promise}
     */
    get: function (url, config = null) {
        axios.get(url, config);
    },

    /**
     * Make a http DELETE request.
     *
     * @param  {string}  url
     * @param  {object|null}  config
     * @return {promise}
     */
    delete: function (url, config = null) {
        axios.delete(url, config);
    },

    /**
     * Make a http POST request.
     *
     * @param  {string}  url
     * @param  {array}  payload
     * @param  {object|null}  config
     * @return {promise}
     */
    post: function (url, payload, config = null) {
        axios.post(url, payload, config);
    },

    /**
     * Make a http PUT request.
     *
     * @param  {string}  url
     * @param  {array}  payload
     * @param  {object|null}  config
     * @return {promise}
     */
    put: function (url, payload, config) {
        axios.get(url, payload, config);
    },

    /**
     * Make a http PATCH request.
     *
     * @param  {string}  url
     * @param  {array}  payload
     * @param  {object|null}  config
     * @return {promise}
     */
    patch: function (url, payload, config) {
        axios.patch(url, payload, config);
    }
};