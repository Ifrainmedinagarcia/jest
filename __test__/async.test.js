import { getDataFromApi } from '../promise'


describe('test async and await', () => {
    const api = 'https://rickandmortyapi.com/api/character/'
    const getRick = 'https://rickandmortyapi.com/api/character/1'
    test('make a request to an api ', async () => {
        await getDataFromApi(api)
            .then(data => {
                expect(data.results.length).toBeGreaterThan(0)
            })
        await getDataFromApi(getRick)
            .then(data => {
                expect(data.name).toEqual('Rick Sanchez')
            })
    });

    test('make a request to an api with error', async () => {
        const apiError = 'http://httpstat.us/404'
        const request = getDataFromApi(apiError)
        await expect(request).rejects.toEqual(Error('Request failed with status code 404'))
    });

    test('resolve "hi" ', async () => {
        await expect(Promise.resolve('hi')).resolves.toBe('hi')
        await expect(Promise.reject('Error')).rejects.toBe('Error')
    });
});
