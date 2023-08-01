const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
let myRouter = require('./routes/myRouter.js');
const port = 3000;
const {add,multiply,remainder,exponent,divide,minus} = require('./controllers/calculatorController.js');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.use('/calculator', myRouter)
app.listen(port, () => {
console.log(`Calculator app listening at http://localhost:${port}`)
});
