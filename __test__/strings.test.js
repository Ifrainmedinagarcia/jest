describe('check texts strings', () => {
    const text = 'A beautiful text '
    test('should contain the following text', () => {
        expect(text).toMatch(/beautiful/i)
    });
    test('should no contain the following text', () => {
        expect(text).not.toMatch(/Pear/i)
    });
    test('we check the length of a text ', () => {
        expect(text).toHaveLength(17);
    });
});
