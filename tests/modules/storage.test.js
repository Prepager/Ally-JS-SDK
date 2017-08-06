const storage = require('../../src/modules/storage');
require('../mocks/storage.mock');

/** @test */
test('can get, set and remove object storage', () => {
    let example = {a: 1, b: 2};

    storage.setStorage('test-object-storage', example);
    expect(storage.getStorage('test-object-storage')).toEqual(example);

    storage.removeStorage('test-object-storage');
    expect(storage.getStorage('test-object-storage')).toBeNull();
});

/** @test */
test('can get, set and remove string storage', () => {
    let example = 'some-string-here';

    storage.setStorage('test-string-storage', example);
    expect(storage.getStorage('test-string-storage')).toEqual(example);

    storage.removeStorage('test-string-storage');
    expect(storage.getStorage('test-string-storage')).toBeNull();
});

/** @test */
test('can use storage handle method', () => {
    let example = 'some-string-here';

    storage.handle('test-handle-storage', example);
    expect(storage.handle('test-handle-storage')).toEqual(example);

    storage.handle('test-handle-storage', false);
    expect(storage.handle('test-handle-storage')).toBeNull();
});
