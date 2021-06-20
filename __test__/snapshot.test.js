import { getCharacter } from '../snapshot'
import Rick from '../rick.json'
import { expect } from '@jest/globals';

describe('it is snapshot time', () => {
    test('should snapshot', () => {
        expect(getCharacter(Rick)).toMatchSnapshot()
    });

    test('always failed the snapshot', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }
        expect(user).toMatchSnapshot()
    });

    test('we have a exception ', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Ifrain Medina García'
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    });
});
