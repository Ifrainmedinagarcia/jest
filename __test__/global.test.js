const text = 'Hello World'

const fruits = ['Apple', "Melon", "Banana"]

test('should contain a text', () => {
    expect(text).toMatch(/World/)
});


test('should contain an Apple', () => {
    expect(fruits).toContain('Apple')
});

test('should be greater than', () => {
    expect(10).toBeGreaterThan(8)
});

test('should be true', () => {
    expect(true).toBeTruthy()
});


const reverseString = (str, cb) => {
    cb(str.split('').reverse().join(""))
}

test('test to callback', () => {
    reverseString('Hi', (str) => {
        expect(str).toBe('iH')
    })
});


const reverseStringTwo = (str) => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

test('test a promise ', () => {
    return reverseStringTwo('Hola')
        .then(string => {
            expect(string).toBe('aloH')
        })
});

test('test async await', async () => {
    const string = await reverseStringTwo('hola')
    expect(string).toBe('aloh')
});


afterEach(() => console.log('Después de cada prueba'))
afterAll(() => console.log('Después de todas las pruebas'))


beforeEach(() => console.log('Antes de cada prueba'))
beforeAll(() => console.log('Antes de cada prueba'))