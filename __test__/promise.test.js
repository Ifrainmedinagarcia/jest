import { getDataFromApi } from '../promise'

describe('Check promise', () => {
    const api = 'https://rickandmortyapi.com/api/character/'
    test('should return the api data', (done) => {
        getDataFromApi(api)
            .then(data => {
                expect(data.results.length).toBeGreaterThan(0)
                done()
            })
    });
});



describe('resolver', () => {
    test('should return "hi"', () => {
        expect(Promise.resolve('hi')).resolves.toBe('hi')
    });
    test('should return reject', () => {
        expect(Promise.reject('Error')).rejects.toBe('Error')
    });
});
