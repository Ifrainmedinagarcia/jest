import { sum, subtraction, divide, multiply } from '../maths'


describe('arithmetic operation', () => {
    test('should return a correct value in the sum operation', () => {
        expect(sum(1, 4)).toBe(5)
    })
    test('should return a correct value in the multiply operation', () => {
        expect(multiply(2, 2)).toBe(4)
    })

    test('should return a correct value in the divide operation', () => {
        expect(divide(2, 2)).toBe(1)
    })

    test('should return a correct value in the subtraction operation', () => {
        expect(subtraction(4, 2)).toBe(2)
    })

})
