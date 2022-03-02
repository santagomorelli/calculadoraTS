import { Router} from "express";
import { calculadora } from "../controller/calculadora";

const router = Router();

router.get('/');

router.put('/', (req,res,next) => calculadora.load(req,res,next));

router.post('/');

router.delete('/');

export default router;
