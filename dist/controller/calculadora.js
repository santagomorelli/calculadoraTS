"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = void 0;
class Calculadora {
    constructor() {
        this.numbersArray = [];
        this.operatorsArray = [];
    }
    load(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const newNumber = parseFloat(req.body.numbers);
            const newOperator = req.body.operators;
            let historyNumber = yield this.numbersArray;
            let historyOperator = yield this.operatorsArray;
            historyNumber.push(newNumber);
            historyOperator.push(newOperator);
            this.numbersArray = yield historyNumber;
            this.operatorsArray = yield historyOperator;
            res.json({ msg: `${historyNumber} ${historyOperator}` });
        });
    }
    resultado(req, res, next) {
        const length = this.numbersArray.length;
        console.log(this.numbersArray, this.operatorsArray);
        const operations = this.operatorsArray;
        let resultado = 0;
        for (let i = 0; i < length; i++) {
            let number = parseFloat(this.numbersArray[i]);
            switch (operations[i]) {
                case '+':
                    resultado = resultado + number;
                    console.log('suma', resultado, number);
                    break;
                case '-':
                    resultado = resultado - number;
                    console.log('resta', resultado, number);
                    break;
                case '*':
                    resultado = resultado * number;
                    break;
                case '/':
                    resultado = resultado / number;
                    break;
                default:
                    resultado = resultado;
            }
        }
        res.json(resultado);
    }
    reset(res) {
        this.numbersArray = [];
        this.operatorsArray = [];
        res.json({ msg: 'Calculadora reseteada' });
    }
}
exports.calculadora = new Calculadora();
