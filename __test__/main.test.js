const randomStrings = require('../main')


describe('Test functions of randomStrings', () => {
    test('test function', () => {
        expect(typeof (randomStrings())).toBe('string')
    });
    test('check that there is no city ', () => {
        expect(randomStrings()).not.toMatch(/cordoba/)
    });

});
