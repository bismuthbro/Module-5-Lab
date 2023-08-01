const myCalculatorLibrary = require('../libraries/Calculator.js')
const myLoggerLibrary = require('../libraries/Logger.js')
let myCalc = new myCalculatorLibrary()
let myLogger = new myLoggerLibrary(myCalc.id,myCalc.result)
let calculatorExports = {
    add : myCalc.add,
    minus : myCalc.minus(),
    multiply : myCalc.multiply(),
    divide : myCalc.divide(),
    remainder : myCalc.remainder(),
    exponent : myCalc.exponent(),
}
module.exports = {calculatorExports}