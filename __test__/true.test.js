import {
    isNull,
    isTrue,
    isFalse,
    isUndefined
} from '../true'


describe('Try results of the functions', () => {
    test('should be null', () => {
        expect(isNull()).toBeNull()
    });
    test('should be true', () => {
        expect(isTrue()).toBeTruthy()
    });
    test('should be false', () => {
        expect(isFalse()).toBeFalsy()
    });
    test('should be undefined', () => {
        expect(isUndefined()).toBeUndefined()
    });
});
