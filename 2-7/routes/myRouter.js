const express = require('express')
const myCalculatorRouter = express.Router()
const myCalculatorController = require('../controllers/calculatorController.js')
let {add,minus,multiply,divide,remainder,exponent} = myCalculatorController
myCalculatorRouter.get('/', (req,res) =>{
    res.send('this is the calculator route')
});
myCalculatorRouter.post('/add/', add );
myCalculatorRouter.post('/minus/', minus);
myCalculatorRouter.post('/multiply/', multiply );
myCalculatorRouter.post('/divide/', divide );
myCalculatorRouter.post('/remainder/', remainder );
myCalculatorRouter.post('/exponent/', exponent);

module.exports = myCalculatorRouter;