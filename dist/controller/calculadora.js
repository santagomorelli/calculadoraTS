"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = void 0;
class Calculadora {
    constructor() {
        this.numbersArray = [];
    }
    load(req, res, next) {
        let newNumber = req.body.numbers;
        let historyNumber = this.numbersArray;
        historyNumber.push(newNumber);
        res.json({ msg: `${historyNumber}` });
    }
}
exports.calculadora = new Calculadora();
