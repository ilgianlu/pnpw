const index = require('../index');

const { expect } = require('@jest/globals');

describe('salutation', () => {
    it('say hello', () => {
        const sal = index.salute('ilgianlu');

        expect(sal).toBe('hello + ilgianlu');
    })
})