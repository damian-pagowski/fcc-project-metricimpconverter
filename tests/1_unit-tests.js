/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai')
var assert = chai.assert
var ConvertHandler = require('../controllers/convertHandler.js')
var expect = require('chai').expect
var convertHandler = new ConvertHandler()

suite('Unit Tests', function () {
  suite('Function convertHandler.getNum(input)', function () {
    test('Whole number input', function (done) {
      const input = '32L'
      assert.equal(convertHandler.getNum(input), 32)
      done()
    })

    test('Decimal Input', function (done) {
      const input = '32.25km'
      assert.equal(convertHandler.getNum(input), 32.25)
      done()
    })

    test('Fractional Input', function (done) {
      const input = '2/3L'
      assert.equal(convertHandler.getNum(input), 0.66667)
      done()
    })

    test('Fractional Input w/ Decimal', function (done) {
      const input = '1/2.565L'
      assert.equal(convertHandler.getNum(input), 'Invalid Number')
      done()
    })

    test('Invalid Input (double fraction)', function (done) {
      const input = '1/2/565L'
      assert.equal(convertHandler.getNum(input), 'Invalid Number')
      done()
    })

    test('No Numerical Input', function (done) {
      const input = 'TENLITERS'
      assert.equal(convertHandler.getNum(input), 'Invalid Number')
      done()
    })
  })

  suite('Function convertHandler.getUnit(input)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = [
        'gal',
        'l',
        'mi',
        'km',
        'lbs',
        'kg',
        'GAL',
        'L',
        'MI',
        'KM',
        'LBS',
        'KG'
      ]
      input.forEach(function (ele) {
        assert.equal(
          convertHandler.getUnit('12' + ele),
          ele.toLocaleLowerCase()
        )
      })
      done()
    })

    test('Unknown Unit Input', function (done) {
      const expectedOutput = 'Invalid Unit'
      assert.equal(convertHandler.getUnit('12stones'), expectedOutput)
      done()
    })
  })

  suite('Function convertHandler.getReturnUnit(initUnit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
      var expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs']
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i])
      })
      done()
    })
  })

  suite('Function convertHandler.spellOutUnit(unit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
      var expect = [
        'gallons',
        'liters',
        'miles',
        'kilometers',
        'pounds',
        'kilograms'
      ]
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })
      done()
    })
  })

  suite('Function convertHandler.convert(num, unit)', function () {
    test('Gal to L', function (done) {
      var input = [5, 'gal']
      var expected = 18.9271
      assert.approximately(
        Number(convertHandler.convert(input[0], input[1])),
        Number(expected),
        0.1
      )
      done()
    })

    test('L to Gal', function (done) {
      var input = [3, 'l']
      var expected = 0.79252
      assert.approximately(
        Number(convertHandler.convert(input[0], input[1])),
        Number(expected),
        0.1
      )
      done()
    })

    test('Mi to Km', function (done) {
      var input = [7, 'mi']
      var expected = 11.26538
      assert.approximately(
        Number(convertHandler.convert(input[0], input[1])),
        Number(expected),
        0.1
      )
      done()
    })

    test('Km to Mi', function (done) {
      var input = [3, 'km']
      var expected = 1.86412
      assert.approximately(
        Number(convertHandler.convert(input[0], input[1])),
        Number(expected),
        0.1
      )
      done()
    })

    test('Lbs to Kg', function (done) {
      var input = [4, 'lbs']
      var expected = 1.81437
      assert.approximately(
        Number(convertHandler.convert(input[0], input[1])),
        Number(expected),
        0.1
      )
      done()
    })

    test('Kg to Lbs', function (done) {
      var input = [15, 'kg']
      var expected = 33.06937
      assert.approximately(
        Number(convertHandler.convert(input[0], input[1])),
        Number(expected),
        0.1
      )
      done()
    })
  })
})
