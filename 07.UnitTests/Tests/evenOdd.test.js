const { expect } = require('chai');
const { describe } = require('mocha');
const isOddOrEven = require('../02. Even Or Odd');

describe('Even odd number Tests', () => {
    it('Not a string return undefined', () => {
        expect(isOddOrEven(1)).to.be.undefined
        expect(isOddOrEven()).to.be.undefined
    })
    it('Returns Even', () => {
        expect(isOddOrEven('even')).to.be.equal('even')
    })
    it('Returns Odd', () => {
        expect(isOddOrEven('odd')).to.be.equal('odd')
    })
})