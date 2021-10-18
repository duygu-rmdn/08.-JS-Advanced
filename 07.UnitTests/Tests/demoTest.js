const { expect } = require('chai');
const { describe } = require('mocha');
const lookupChar = require('../demofile');

describe('Should return undefined if not a string and not a number', () => {
    it('Not a string return undefined', () => {
        expect(lookupChar({}, 2)).to.be.undefined
    })
    it('Not a integer return undefined', () => {
        expect(lookupChar(['2', '3'], 'asd')).to.be.undefined
    })

    it('Not a integer return undefined', () => {
        expect(lookupChar('text', 2.2)).to.be.undefined
    })
    it('Not a string return undefined', () => {
        expect(lookupChar('a', 'asd')).to.be.undefined
    })
    it('Should return Incorrect index with empty string', function () {
        expect(lookupChar("", 0)).to.equal("Incorrect index");
    });

    describe('Should return Incorrect index if index is incorrect', () => {
        it('Return incorrect index out of range', () => {
            expect(lookupChar('asd', 10)).to.equal('Incorrect index')
        })
        it('Return incorrect index negative', () => {
            expect(lookupChar('asd', -1)).to.equal('Incorrect index')
        })
    })

    describe('Should index is correct', () => {
        it('Return correct value', () => {
            expect(lookupChar('asd', 1)).to.equal('s')
        })
        it('Return correct value', () => {
            expect(lookupChar('asasaasd', 7)).to.equal('d')
        })
    })
})