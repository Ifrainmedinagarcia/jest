import { arrayColors, arrayFruits } from '../arrays'

describe('Contain elements in the array Fruits', () => {
    test('should contain the fruit "apple" in the array', () => {
        expect(arrayFruits()).toContain('Apple')
    })
    test('should not have the fruit in the array', () => {
        expect(arrayFruits()).not.toContain('tomato')
    })

    test('check the length of array ', () => {
        expect(arrayFruits()).toHaveLength(4)
    });

});

describe('Contain elements in the array colors', () => {
    test('we check than exits a color ', () => {
        expect(arrayColors()).toContain('Blue')
    });
});

