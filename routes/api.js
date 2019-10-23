/*
*
*
*       Complete the API routing below
*
*
*/

'use strict'

var expect = require('chai').expect
var ConvertHandler = require('../controllers/convertHandler.js')
const INVALID_UNIT = 'invalid unit'
const INVALID_NUMBER = 'invalid number'
const INVALID_UNIT_AND_NUM = 'invalid number and unit'

module.exports = function (app) {
  var convertHandler = new ConvertHandler()

  app.route('/api/convert').get(function (req, res) {
    var input = req.query.input
    var initNum = convertHandler.getNum(input)
    var initUnit = convertHandler.getUnit(input)
    var returnNum = convertHandler.convert(initNum, initUnit)
    var returnUnit = convertHandler.getReturnUnit(initUnit)
    var string = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    )

    if (initUnit === INVALID_UNIT && initNum === INVALID_NUMBER) {
      res.status(400).json({ error: INVALID_UNIT_AND_NUM })
    } else if (initUnit === INVALID_UNIT) {
      res.status(400).json({ error: INVALID_UNIT })
    } else if (initNum === INVALID_NUMBER) {
      res.status(400).json({ error: INVALID_NUMBER })
    } else {
      res.json({ initNum, initUnit, returnNum, returnUnit, string })
    }
  })
}
