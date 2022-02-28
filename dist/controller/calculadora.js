"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = void 0;
class Calculadora {
    constructor(numbersArray = 0) {
        this.numbersArray = numbersArray;
        //console.log(this.numbersArray);
    }
    load(req, res) {
        let numbers = this.numbersArray;
        //numbers.push(parseFloat(req.body.numbers));
        //let operators = this.operatorsArray;
        //operators.push(req.body.operators);    
        // console.log(numbers);
        res.json(`${numbers} `);
    }
}
exports.calculadora = new Calculadora();
