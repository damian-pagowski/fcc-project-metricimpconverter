/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler () {
  this.getNum = function (input) {
    const regex = /^[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/
    const matches = input.match(regex)
    console.log('MATCHED WITH REGEX: : ' + matches)
    if (matches) {
      let result
      const split = matches[0].split('/')
      if (split.length == 2) {
        if (split[0].match(/[\.]/) || split[1].match(/[\.]/)) {
          result = NaN
        } else {
          console.log('FRACTION')
          result = parseInt(split[0], 10) / parseInt(split[1], 10)
        }
      } else {
        console.log('DECIMAL')
        result = matches[0]
      }
      if (!isNaN(result)) {
        return Number(result).toFixed(5)
      }
    }
    return 'Invalid Number'
  }

  this.getUnit = function (input) {
    const inp = input.toLowerCase()
    let index = inp.search(/[A-Za-z]{1,3}$/)
    var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
    var result =
      index > 0
        ? input.includes(inp.slice(index)) ? inp.slice(index) : 'Invalid Unit'
        : 'Invalid Unit'
    return result
  }

  this.getReturnUnit = function (initUnit) {
    let returnUnit
    console.log('Init Unit: ' + initUnit)
    switch (initUnit.toLowerCase()) {
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
    return 'Invalid Unit'
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
    result = parseFloat(result)
    console.log('CONVERT VALUE: ' + result)
    console.log('CONVERT TYPE: ' + typeof result)

    return result.toFixed(5)
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  }
}

module.exports = ConvertHandler
