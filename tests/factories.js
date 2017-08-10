module.exports = {
    /**
     * Return a valid login response.
     */
    login: function () {
        return [200, {
            token_type: 'Bearer',
            expires_in: 1799,
            access_token: 'valid-access-token',
            refresh_token: 'valid-refresh-token'
        }];
    },

    /**
     * Return a user response.
     *
     * @param  {integer}  userID
     * @return {array}
     */
    user: function (userID = 1) {
        return [200, {
            id: userID,
            team_id: 1,
            name: 'Registered',
            email: 'registered@example.com',
            email_verified: 1,
            country: 'DK',
            avatar: 'https://www.gravatar.com/avatar/some-user-hash?d=identicon&s=150',
            suspended_reason: null,
            suspended_at: null,
            suspended_to: null,
            created_at: '2017-07-26 21:00:38',
            updated_at: '2017-07-26 21:21:48'
        }];
    },

    /**
     * Return a team response.
     *
     * @param  {integer}  userid
     */
    team: function (userid = 1) {
        return [200, {
            id: 3,
            user_id: userid,
            name: 'Example Team',
            slug: 'example-team',
            avatar: 'https://www.gravatar.com/avatar/some-team-hash?d=identicon&s=150',
            trial_ends_at: null,
            suspended_reason: null,
            suspended_at: null,
            suspended_to: null,
            deleted_at: null,
            created_at: '2017-07-26 21:01:30',
            updated_at: '2017-07-26 21:01:30',
            members: [
                this.user(true, false)[1]
            ]
        }];
    }
};
