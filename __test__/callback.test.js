import { callbackHell } from '../callbacks'
import { getDataFromApi } from '../promise';

describe('test of callback', () => {
    test('test of callback ', (done) => {
        const otherCallback = (data) => {
            expect(data).toBe('Hi JavaScript')
            done()
        }
        callbackHell(otherCallback)
    });
});

