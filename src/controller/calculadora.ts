import {NextFunction, Request,Response} from 'express';

class Calculadora {
    
 numbersArray: any[];
 operatorsArray: any[];
 resultadoFinal:any;
    
     constructor(){
         this.numbersArray = []; 
         this.operatorsArray = [];
         this.resultadoFinal = 0;
     }

    async load(req:Request,res:Response,next:NextFunction){
          const newNumber = parseFloat(req.body.numbers);
          const newOperator = req.body.operators;
          let historyNumber: any[] = await this.numbersArray;
          let historyOperator:any[]= await this.operatorsArray;
          historyNumber.push(newNumber);
          historyOperator.push(newOperator);
          this.numbersArray = await historyNumber;
          this.operatorsArray = await historyOperator;
          res.json({msg:`${historyNumber} ${historyOperator}`});
    }

    resultado(req:Request,res:Response,next:NextFunction){
        const length = this.numbersArray.length;
        console.log(this.numbersArray, this.operatorsArray)
        const operations = this.operatorsArray;
        let resultado: number = 0;
        for(let i=0;i<length; i++){
            let number = parseFloat(this.numbersArray[i]);
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
        this.resultadoFinal = resultado;
       res.json(resultado)
    }

    reset(req:Request,res:Response,next:NextFunction){
        this.numbersArray=[];
        this.operatorsArray=[];
        res.json({msg:'Calculadora reseteada'})
    }
} 


export const calculadora = new Calculadora();
