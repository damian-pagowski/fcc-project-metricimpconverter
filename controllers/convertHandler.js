/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler () {
  this.getNum = function (input) {
    var result = Number(input.replace(/[^0-9\.]+/g, ''))
    console.log('VALUE: ' + result)
    return result.toFixed(5)
  }

  this.getUnit = function (input) {
    let index = input.search(/[A-Za-z]{2,3}$/)
    var result = index > 0 ? input.slice(index) : null
    console.log('UNITS: ' + result)
    return result
  }

  this.getReturnUnit = function (initUnit) {
    let returnUnit
    console.log('Init Unit: ' + initUnit)
    switch (initUnit) {
      case 'gal':
        returnUnit = 'l'
        break
      case 'lbs':
        returnUnit = 'kg'
        break
      case 'mi':
        returnUnit = 'km'
        break
      case 'l':
        returnUnit = 'gal'
        break
      case 'kg':
        returnUnit = 'lbs'
        break
      case 'km':
        returnUnit = 'mi'
        break

      default:
        returnUnit = 'invalid unit'
    }
    console.log('Return Unit : ' + returnUnit)
    return returnUnit
  }

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case 'gal':
        return 'gallons'
      case 'lbs':
        return 'pounds'
      case 'mi':
        return 'miles'
      case 'l':
        return 'liters'
      case 'kg':
        return 'kilograms'
      case 'km':
        return 'kilometers'
    }
    return result
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'l':
        result = initNum / galToL
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'km':
        result = initNum / miToKm
        break
    }
    return result.toFixed(5)
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  }
}

module.exports = ConvertHandler
