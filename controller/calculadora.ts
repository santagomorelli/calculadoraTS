import {Request,Response} from 'express';
import fs from 'fs';

class Calculadora {
    numbersArray: any = 0;
    operatorsArray: any = '+';

    load(req:Request,res:Response): any{
        let numbers: any[] = this.numbersArray;
        //numbers.push(parseFloat(req.body.numbers));
        //let operators = this.operatorsArray;
        //operators.push(req.body.operators);    
        console.log(numbers);
        res.json(`${numbers} `)
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
    }
} */
}
 
export const calculadora = new Calculadora();