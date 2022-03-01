import {NextFunction, Request,Response} from 'express';

class Calculadora {
    
 numbersArray: any[];
    
     constructor(){
         this.numbersArray = []; 
     }

    load(req:Request,res:Response,next:NextFunction){
        let newNumber = req.body.numbers;
        let historyNumber: any[] = this.numbersArray;
        historyNumber.push(newNumber);
        res.json({msg:`${historyNumber}`});
    }

    /*resultado(res:Response){
        const length = this.numbersArray.length;
        const operations = this.operators;
        let resultado: number = 0;
        for(let i=0;i<length; i++){
            let number = this.numbersArray[i];
            switch(operations[i]){
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
        console.log(resultado);
        res.json(resultado)
    }

    reset(res: Response){
        this.numbersArray=[];
        this.operators=[];
        res.json({msg:'Calculadora reseteada'})
    }*/
} 


export const calculadora = new Calculadora();
