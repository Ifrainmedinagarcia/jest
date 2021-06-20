// After test
afterEach(() => console.log('After test'))
afterAll(() => console.log('After all test'))

//Before test
beforeAll(() => console.log('before all test'))
beforeEach(() => console.log('before test'))


describe('preparing before execute', () => {
    test('is true ', () => {
        expect(true).toBeTruthy()
    });
});
