const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    test('convertHandler should correctly read a whole number input.', () => {
        assert.equal(convertHandler.getNum('50gal'), 50)
    })

    test('convertHandler should correctly read a decimal number input.', () => {
        assert.equal(convertHandler.getNum('50.5gal'), 50.5)
    })

    test('convertHandler should correctly read a fractional input.', () => {
        assert.equal(convertHandler.getNum('5/2gal'), 2.5)
    })

    test('convertHandler should correctly read a fractional input with a decimal.', () => {
        assert.equal(convertHandler.getNum('5.2/2.6gal'), 2)
    })

    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
        assert.equal(convertHandler.getNum('5/2/7gal'), 'err')
    })

    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
        assert.equal(convertHandler.getNum('gal'), 1)
    })

    test('convertHandler should correctly read each valid input unit.', () => {
        assert.equal(convertHandler.getUnit('2/4l'), 'L')
        assert.equal(convertHandler.getUnit('2/4mI'), 'mi')
        assert.equal(convertHandler.getUnit('2/3LbS'), 'lbs')
        assert.equal(convertHandler.getUnit('2kG'), 'kg')
        assert.equal(convertHandler.getUnit('2/4KM'), 'km')
        assert.equal(convertHandler.getUnit('2/4gAl'), 'gal')
    })

    test('convertHandler should correctly return an error for an invalid input unit.', () => {
        assert.equal(convertHandler.getUnit('2/3gal5'), 'err')
    })

    test('convertHandler should return the correct return unit for each valid input unit.', () => {
        assert.equal(convertHandler.getReturnUnit('km'), 'mi')
        assert.equal(convertHandler.getReturnUnit('mi'), 'km')
        assert.equal(convertHandler.getReturnUnit('L'), 'gal')
        assert.equal(convertHandler.getReturnUnit('gal'), 'L')
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg')
    })

    test('convertHandler should correctly return the spelled-out string unit for each valid input unit.',()=>{
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers')
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles')
        assert.equal(convertHandler.spellOutUnit('L'), 'liters')
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons')
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms')
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds')
    })

    test('convertHandler should correctly convert gal to L.',()=>{
        assert.approximately(convertHandler.convert(12,'L'), 3.17007,0.001)
    })
    test('convertHandler should correctly convert L to gal.',()=>{
        assert.approximately(convertHandler.convert(3.17007,'gal'), 12,0.001)
    })
    test('convertHandler should correctly convert mi to km.',()=>{
        assert.approximately(convertHandler.convert(12,'mi'), 19.31208,0.001)
    })
    test('convertHandler should correctly convert km to mi.',()=>{
        assert.approximately(convertHandler.convert(19.31208,'km'), 12,0.001)
    })
    test('convertHandler should correctly convert lbs to kg.',()=>{
        assert.approximately(convertHandler.convert(12,'lbs'), 5.44310,0.001)
    })
    test('convertHandler should correctly convert kg to lbs.',()=>{
        assert.approximately(convertHandler.convert(5.44310,'kg'), 12,0.001)
    })

});
