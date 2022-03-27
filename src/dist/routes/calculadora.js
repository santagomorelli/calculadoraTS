"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calculadora_1 = require("../controller/calculadora");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('main', {
        resultado: calculadora_1.calculadora.resultadoFinal
    });
});
router.put('/', (req, res, next) => calculadora_1.calculadora.load(req, res, next));
router.post('/', (req, res, next) => calculadora_1.calculadora.resultado(req, res, next));
router.delete('/', (req, res, next) => calculadora_1.calculadora.reset(req, res, next));
exports.default = router;
