const sum = require('./sum.js');

describe("Test the sum function", () => {

    test('adds 1 + 2 to equal 3', () => {
        expect( sum(1, 2) ).toBe(3); // ✅
        expect( sum(1,2)).toBeGreaterThan(0) // ✅
        expect( sum(0,1) ).not.toBe(0)
        
        expect( sum(7, null) ).not.toBe(NaN) 
    });
    
    it('sum add 0 and 1 and the result is greater than 0', () => {
        expect( sum(0,1)).toBeGreaterThan(0) // ✅
    });
})


