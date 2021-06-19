import { numbers } from '../numbers'


describe('compare of numbers', () => {
    test('should be greater  than', () => {
        expect(numbers(2, 2)).toBeGreaterThan(3)
    })
    test('should be greater tha or equal', () => {
        expect(numbers(5, 5)).toBeGreaterThanOrEqual(5)
    });

    test('should be less than', () => {
        expect(numbers(2, 2)).toBeLessThan(5)
    });

    test('should ber less than or equal', () => {
        expect(numbers(3, 5)).toBeLessThanOrEqual(8)
    });

    test('should be float numbers', () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.4)
    });

});