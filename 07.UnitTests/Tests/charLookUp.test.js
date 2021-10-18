const { expect } = require('chai');
const { describe } = require('mocha');
const lookupChar = require('../03. Char Lookup');

describe('Even odd number Tests', () => {
    it('return undefined', () => {
        expect(lookupChar({}, "asd")).to.be.undefined
        expect(lookupChar('strs', 'sdfsdfds')).to.be.undefined
        expect(lookupChar(1, 1)).to.be.undefined
        expect(lookupChar(1, 'sds')).to.be.undefined
    })
    it('Not a integer return undefined', () => {
        expect(lookupChar(['2', '3'], 'asd')).to.be.undefined
    })

    it('Not a integer return undefined', () => {
        expect(lookupChar('text', 2.2)).to.be.undefined
    })
    it('return invalid index', () => {
        expect(lookupChar('strs', 1000)).to.be.equal('Incorrect index')
        expect(lookupChar('sdf', -45)).to.be.equal('Incorrect index')
    })
    it('return correct char', () => {
        expect(lookupChar('strs', 1)).to.be.equal('t')
        expect(lookupChar('sdf', 0)).to.be.equal('s')
    })
})