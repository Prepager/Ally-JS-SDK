const http = require('../modules/http');
const routing = require('../modules/routing');
const storage = require('../modules/storage');

module.exports = {
    /**
     * Manage the authenticated user saved in storage.
     *
     * @param  {object|bool|null}  data
     * @return {object|null}
     */
    user(data = null) {
        return storage.handle('user', data);
    },

    /**
     * Manage the OAuth token saved in storage.
     *
     * @param  {object|bool|null}  data
     * @return {object|null}
     */
    token(data = null) {
        return storage.handle('token', data);
    },

    /**
     * Manage the OAuth expiry saved in storage.
     *
     * @param  {object|bool|null}  data
     * @return {object|null}
     */
    expiry(data = null) {
        return storage.handle('expiry', data);
    },

    /**
     * Manage the orignal token (while impersonating) saved in storage.
     *
     * @param  {object|bool|null}  data
     * @return {object|null}
     */
    impersonating(data = null) {
        return storage.handle('impersonating', data);
    },

    /**
     * Check if a user is logged in.
     *
     * @return {bool}
     */
    check() {
        return this.token() !== null && this.user() !== null;
    },

    /**
     * Login a user with a password grant.
     *
     * @param  {string}  email
     * @param  {string}  password
     * @return {promise}
     */
    login(email, password) {
        return new Promise((resolve, reject) => {
            http.request('login', {
                'email': email,
                'password': password
            }).then(response => {
                this.saveLogin(response);

                this.account().then(user => {
                    resolve(response);
                }).catch(error => reject(error));
            }).catch(error => reject(error));
        });
    },

    /**
     * Retrieve the authenticated account.
     *
     * @return {promise}
     */
    account() {
        return http.request('account.show').then(response => {
            this.user(response.data);
        });
    },

    /**
     * Save the login information.
     *
     * @param  {object}  response
     * @return {void}
     */
    saveLogin(response) {
        if (! response.status == 200) return;

        let expiry = new Date();
        expiry.setTime(expiry.getTime() + response.data.expires_in * 1000);

        this.token(response.data);
        this.expiry(expiry);
    },

    /**
     * Refresh a users oauth token.
     *
     * @return {promise}
     */
    refresh() {
        //
    },

    /**
     * Logout a user and invlidate token.
     *
     * @return {promise}
     */
    logout() {
        return http.request('logout').then(response => {
            this.user(false);
            this.token(false);
            this.expiry(false);
        });
    }
};