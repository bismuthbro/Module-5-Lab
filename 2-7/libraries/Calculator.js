class Calculator {
    constructor(){
        this.id = Math.random() * 1000
    }
    #logResponse = () => {
        res.send(`[Calculator : ${this.id}]:${this.result}`)
    }
    result = null
    add = (req,res) => {
        this.result = String(parseInt(req.body.num1) + parseInt(req.body.num2))
        this.#logResponse()
    }
    minus =  (req, res) => {
        this.result = String(parseInt(req.body.num1) - parseInt(req.body.num2))
        this.#logResponse()    
    }
    multiply =  (req, res) => {
        this.result = String(parseInt(req.body.num1) * parseInt(req.body.num2))
        this.#logResponse()    
    }
    divide = (req, res) => {
        this.result = String(parseInt(req.body.num1) / parseInt(req.body.num2))
        this.#logResponse()    
    }
    remainder = (req, res) => {
        this.result = String(parseInt(req.body.num1) % parseInt(req.body.num2))
        this.#logResponse()   
    }
    exponent = (req, res) => {
        this.result = String(parseInt(req.body.num1) ** parseInt(req.body.num2))
        this.#logResponse()
    }    
}

module.exports = Calculator