const axios = require('axios');
const mocker = require('axios-mock-adapter');
const routing = require('../../src/modules/routing');

module.exports = {
    /**
     * Create the axios mock instance.
     *
     * @var {object}
     */
    instance: new mocker(axios),

    /**
     * Reset the mock instance.
     *
     * @return {null}
     */
    reset() {
        return this.instance.reset();
    },

    /**
     * Create a new axios mock.
     *
     * @param  {string}  method
     * @param  {string}  route
     * @return {object}
     */
    mock(route) {
        let entry = routing.entry(route);

        return this.instance[this.toMethodOn(entry.method)](entry.url);
    },

    /**
     * Convert method to mock call.
     *
     * @param  {string}  method
     * @return {string}
     */
    toMethodOn(method) {
        return 'on' + method.charAt(0).toUpperCase() + method.slice(1).toLowerCase();
    }
};