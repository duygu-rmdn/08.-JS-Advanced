const { assert, expect } = require('chai');
const cinema = require('./cinema.js');

describe("Tests cinema", function() {
    describe("showMovies", function() {
        it("not working", function() {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });
        it("working", function() {
            expect(cinema.showMovies(['a', 'b', 'ab'])).to.be.equal('a, b, ab');
            expect(cinema.showMovies(['a', 'b'])).to.be.equal('a, b');
            expect(cinema.showMovies(['a'])).to.be.equal('a');
        });
     });
     describe("ticketPrice", function() {
        it("not working", function() {
            expect(() => cinema.ticketPrice('alcdsjd')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(12)).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice([])).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice({})).to.throw('Invalid projection type.');
        });
        it("working", function() {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
     });
     describe("swapSeatsInHall", function() {
        it("not working", function() {
            expect(cinema.swapSeatsInHall('alcdsjd')).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('')).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('sdf', 'sdfds')).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('xc', 3)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2, 'sd')).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(232, 12)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2, 3434)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-2, 3434)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2, -3434)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-2, -3434)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(3, 3)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(3.23, 3.12)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(3, 3.12)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(3.23, 3)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("working", function() {
            expect(cinema.swapSeatsInHall(1, 3)).to.be.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 3)).to.be.equal("Successful change of seats in the hall.");
        });
     });
});
