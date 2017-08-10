const routing = require('../../src/modules/routing.js');

/** @test */
test('invalid route throws error', () => {
    expect(() => routing.route('invalid.route.name')).toThrow();
    expect(() => routing.method('invalid.route.name')).toThrow();
    expect(() => routing.entry('invalid.route.name')).toThrow();
});

/** @test */
test('valid route returns data', () => {
    expect(routing.route('app')).toBe('/app');
    expect(routing.method('app')).toBe('GET');
    expect(routing.entry('app')).toEqual({
        url: '/app',
        method: 'GET'
    });
});

/** @test */
test('valid route with base url returns full url', () => {
    routing.baseURL = 'https://example.com';

    expect(routing.route('app')).toBe('https://example.com/app');
});

/** @test */
test('route with passed parameters are replaced', () => {
    routing.baseURL = '';
    routing.map['test.route'] = {
        method: 'GET',
        url: 'test-route/{some-id-1}/{some-id-2}/{optional-id?}'
    };

    expect(routing.route('test.route', {
        'some-id-1': 1,
        'some-id-2': 2
    })).toBe('/test-route/1/2');
});

/** @test */
test('route without required parameters throw error', () => {
    routing.baseURL = '';
    routing.map['test.route'] = {
        method: 'GET',
        url: 'test-route/{some-id-1}/{some-id-2}/{optional-id?}'
    };

    expect(() => routing.route('test.route')).toThrow();
});
