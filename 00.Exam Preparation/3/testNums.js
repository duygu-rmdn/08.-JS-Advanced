const { assert, expect } = require('chai');
const testNumbers = require('./testNumbers.js');


describe("Test numbers", function() {
    describe("sumNumbers", function() {
        it("sum not working", function() {
            expect(testNumbers.sumNumbers('a', '')).to.be.undefined;
            expect(testNumbers.sumNumbers('', [])).to.be.undefined;
            expect(testNumbers.sumNumbers('', '')).to.be.undefined;
            expect(testNumbers.sumNumbers('', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(2, '')).to.be.undefined;
        });
        it("sum working", function() {
            expect(testNumbers.sumNumbers(1, 2)).to.be.equal('3.00');
            expect(testNumbers.sumNumbers(1.3, 2.7)).to.be.equal('4.00');
            expect(testNumbers.sumNumbers(1.555, 1)).to.be.equal('2.55');
        });
     });
     describe("numbercheker", function() {
        it("numbercheker not working", function() {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
        it("numbercheker working", function() {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
            expect(testNumbers.numberChecker('2')).to.contain('even');
            expect(testNumbers.numberChecker(2)).to.contain('even');
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });
     });
     describe("averagesum", function() {
        it("averagesum working", function() {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
     });
});
