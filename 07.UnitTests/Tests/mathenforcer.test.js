const { expect } = require('chai');
const { describe } = require('mocha');
const mathEnforcer = require('../04. Math Enforcer');

describe('mathEnforcer', () => {
    describe('Test mathEnforcer addFive functionallity', () => {
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
        })
        it('Expect forect result', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(1.5)).to.be.equal(6.5);
        })
    })
    describe('Test mathEnforcer substract10 functionallity', () => {
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
        })
        it('Expect forect result', () => {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            expect(mathEnforcer.subtractTen(1.5)).to.be.equal(-8.5);
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
        })
    })
    describe('Test mathEnforcer substract10 functionallity', () => {
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.sum('5', 4)).to.be.undefined;
            expect(mathEnforcer.sum([], 4)).to.be.undefined;
            expect(mathEnforcer.sum({}, 4)).to.be.undefined;
            expect(mathEnforcer.sum([1, 2], 4)).to.be.undefined;
            expect(mathEnforcer.sum(4, '5')).to.be.undefined;
            expect(mathEnforcer.sum(4, [])).to.be.undefined;
            expect(mathEnforcer.sum(4, {})).to.be.undefined;
            expect(mathEnforcer.sum(4, [1, 2])).to.be.undefined;
        })
        it('Expect forect result', () => {
            expect(mathEnforcer.sum(5, 1)).to.be.equal(6);
            expect(mathEnforcer.sum(-5, 2)).to.be.equal(-3);
            expect(mathEnforcer.sum(1.5, 2)).to.be.equal(3.5);
            expect(mathEnforcer.sum(10.5, -12)).to.be.equal(-1.5);
        })
    })
})