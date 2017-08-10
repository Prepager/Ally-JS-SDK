const http = require('../../src/modules/http');
const axios = require('../mocks/axios.mock');

/** @test */
test('can make get request', async () => {
    axios.instance.onGet('test-get-route').reply(200, 'GET');

    expect.assertions(1);
    await http.get('test-get-route').then(response => {
        expect(response.data).toBe('GET');
    });
});

/** @test */
test('can make delete request', async () => {
    axios.instance.onDelete('test-delete-route').reply(200, 'DELETE');

    expect.assertions(1);
    await http.delete('test-delete-route').then(response => {
        expect(response.data).toBe('DELETE');
    });
});

/** @test */
test('can make post request', async () => {
    axios.instance.onPost('test-post-route').reply(200, 'POST');

    expect.assertions(1);
    await http.post('test-post-route').then(response => {
        expect(response.data).toBe('POST');
    });
});

/** @test */
test('can make put request', async () => {
    axios.instance.onPut('test-put-route').reply(200, 'PUT');

    expect.assertions(1);
    await http.put('test-put-route').then(response => {
        expect(response.data).toBe('PUT');
    });
});

/** @test */
test('can make patch request', async () => {
    axios.instance.onPatch('test-patch-route').reply(200, 'PATCH');

    expect.assertions(1);
    await http.patch('test-patch-route').then(response => {
        expect(response.data).toBe('PATCH');
    });
});

/** @test */
test('can set auth header', async () => {
    axios.instance.onGet('test-auth-route').reply(200, 'AUTH');

    http.setToken('valid-test-token');

    expect.assertions(1);
    await http.get('test-auth-route').then(response => {
        let bearer = response.config.headers.Authorization;

        expect(bearer).toBe('Bearer valid-test-token');
    });
});