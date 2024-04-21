const { a } = require('../src/index')

describe('a', () => {
    it('test', () => {
        // is function
        expect(a).toBeInstanceOf(Function)
    })
})