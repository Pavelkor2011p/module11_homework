const getPercents = require('./index.js');

describe('test for getPercents function', () => {
    it('20 persents from 300 to equal 60', () => {
        const result = getPercents(20, 300);
        expect(result).toBe(60);
    }),

    it('30 persents from 500 to equal 60', () => {
        const result = getPercents(30, 500);
        expect(result).toBe(150);
    }),

    it('0 persents from 300 to equal Данные не верны', () => {
        const result = getPercents(0, 300);
        expect(result).toBe('Данные не верны');
    })
})