function ConvertHandler() {

  this.getNum = function (input) {
    let result;
    let noFraction = /([0-9]+[.]?[0-9]*)/g
    let withFraction = /([0-9]+[.]?[0-9]*[/][0-9]+[.]?[0-9]*)/g

    let fractionCheck = /([/])/g
    let decimalCheck = /([.])/g

    let fractionValid = /([/][0-9]+)/g
    let decimalValid = /([.][0-9]+)/g

    let invalidSymbols = /([^0-9./A-z])/g

    // invalid symbols
    if (input.match(invalidSymbols) !== null) {
      result = 'err'
    }
    // no invalid symbols
    else {
      // no fraction
      if (input.match(fractionCheck) === null) {
        // no decimal
        if (input.match(decimalCheck) === null) {
          result = eval(input.match(noFraction)[0])
        }
        // one decimal
        else if (input.match(decimalCheck).length === 1 && input.match(decimalValid) !== null && input.match(decimalValid).length === 1) {
          result = eval(input.match(noFraction)[0])
        }
        // invalid decimal
        else {
          result = 'err'
        }
      }
      // one fraction
      else if (input.match(fractionCheck).length === 1 && input.match(fractionValid) !== null && input.match(fractionValid).length === 1) {
        // no decimal
        if (input.match(decimalCheck) === null) {
          result = eval(input.match(withFraction)[0])
        }
        // with one or two decimal
        else if (input.match(decimalValid) !== null && input.match(decimalCheck).length === input.match(decimalValid).length && input.match(decimalCheck).length < 3) {
          result = eval(input.match(withFraction)[0])
        }
        // invalid decimal
        else {
          result = 'err'
        }
      }
      // invalid fraction
      else {
        result = 'err'
      }
    }

    return result;
  };

  this.getUnit = function (input) {
    let result;
    let regex = /[a-z].*/
    let inputUpper = input.toLowerCase()
    let unit = inputUpper.match(regex)[0]

    switch(unit){
      case 'gal':
        result = unit
        break
      case 'l':
        result = 'L'
        break
      case 'mi':
        result = unit
        break
      case 'km':
        result = unit
        break
      case 'lbs':
        result = unit
        break
      case 'kg':
        result = unit
        break
      default:
        result = 'err'
        break
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch(initUnit){
      case 'gal':
        result = 'L'
        break
      case 'L':
        result = 'gal'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      default:
        result = 'err'
        break
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch(unit){
      case 'gal':
        result = 'gallons'
        break
      case 'L':
        result = 'liters'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      default:
        result = 'err'
        break
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit){
      case 'gal':
        result = initNum*galToL
        break
      case 'L':
        result = initNum/galToL
        break
      case 'mi':
        result = initNum*miToKm
        break
      case 'km':
        result = initNum/miToKm
        break
      case 'lbs':
        result = initNum*lbsToKg
        break
      case 'kg':
        result = initNum/lbsToKg
        break
      default:
        result = 'err'
        break
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      strings: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    }

    return result;
  };
}

module.exports = ConvertHandler;
