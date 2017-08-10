/**
 * Require test requirements.
 */
const index = require('../../src/index');

/** @test */
test('index returns correct keys', () => {
    expect(index.hasOwnProperty('http')).toBe(true);
    expect(index.hasOwnProperty('routing')).toBe(true);

    expect(index.hasOwnProperty('auth')).toBe(true);
});
