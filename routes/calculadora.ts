import { Router} from "express";
import { calculadora } from "../controller/calculadora";

const router = Router();

router.get('/');

router.put('/', (req,res,next) => calculadora.load(req,res,next));

router.post('/', (req,res,next) => calculadora.resultado(req,res,next));

router.delete('/',(req,res,next) => calculadora.reset(req,res,next));

export default router;
