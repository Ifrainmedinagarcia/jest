describe('we use common comparators', () => {
    const user = {
        name: 'Oscar',
        lasName: 'Barajas'
    }
    const user2 = {
        name: 'Oscar',
        lasName: 'Barajas'
    }
    test('they should be the same', () => {
        expect(user).toEqual(user2)
    })

});
