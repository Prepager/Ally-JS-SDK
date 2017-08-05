const routing = require('../../src/modules/routing.js');

/** @test */
test('invalid route throws error', () => {
    expect(() => {
        routing.route('invalid.route.name')
    }).toThrow();
});

/** @test */
test('valid route returns url', () => {
    expect(routing.route('app')).toBe('/app');
});

/** @test */
test('valid route with base url returns full url', () => {
    routing.baseURL = 'https://example.com';

    expect(routing.route('app')).toBe('https://example.com/app');
});
