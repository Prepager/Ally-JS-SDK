const hello = require('../src/hello.js');

test('hello module returns hello world', () => {
  expect(hello.world()).toBe('Hello world!');
});