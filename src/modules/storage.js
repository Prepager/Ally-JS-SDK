module.exports = {
    /**
     * Either get, set or remove storage from driver.
     *
     * @param  {string}  name
     * @param  {object|bool|null}  data
     * @return {object|bool}
     */
    handle(name, data = null) {
        if (data === false) return this.removeStorage(name);
        if (data !== null) return this.setStorage(name, data);

        return this.getStorage(name);
    },

    /**
     * Get an item from storage.
     *
     * @param  {string}  name
     * @return {mixed}
     */
    getStorage(name) {
        return JSON.parse(window.localStorage.getItem(name));
    },

    /**
     * Set an item in storage.
     *
     * @param  {string}  name
     * @param  {mixed}  data
     * @return {null}
     */
    setStorage(name, data) {
        return window.localStorage.setItem(name, JSON.stringify(data));
    },

    /**
     * Remove an item from storage.
     *
     * @param  {string}  name.
     * @return {bool}
     */
    removeStorage(name) {
        return window.localStorage.removeItem(name);
    }
};