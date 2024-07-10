const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    test("should return 'number is less than 5' when passed a number less than 5", function() {
        let output = checkFive.checkFive(1)
        expect(output).toEqual("1 is less than 5.");
    })
    test("should return 'number is equal to 5' when passed the number 5", function(){
        let output = checkFive.checkFive(5)
        expect(output).toEqual("5 is equal to 5.");
    })
    test("should return 'number is greater than 5' when passed a number greater than 5", function(){
        let output = checkFive.checkFive(7)
        expect(output).toEqual("7 is greater than 5.")
    })
})