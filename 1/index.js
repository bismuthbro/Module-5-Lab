const express = require('express')
const app = express()
const anything = express()
const port1 = 3000
const port2 = 3001
anything.get('/',(req, res) => {
    res.send('Second Web Server')
})
app.get('/', (req, res) => {
res.send('Hello World!')
})
anything.listen(port2, () => {
    console.log(`Second example listening at http://localhost:${port2}`
)})
app.listen(port1, () => {
console.log(`Example app
listening at
http://localhost:${port1}`)
})