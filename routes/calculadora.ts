import { Router, request, response, NextFunction } from "express";
import { calculadora } from "../controller/calculadora";

const router = Router();

router.get('/', (req,res,next) => calculadora.load(req,res,next));

router.put('/');

router.post('/');

router.delete('/',);

export default router;
