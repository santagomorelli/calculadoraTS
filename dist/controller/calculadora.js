"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = void 0;
class Calculadora {
    constructor() {
        this.numbersArray = 0;
        this.operatorsArray = '+';
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
    load(req, res) {
        let numbers = this.numbersArray;
        //numbers.push(parseFloat(req.body.numbers));
        //let operators = this.operatorsArray;
        //operators.push(req.body.operators);    
        console.log(numbers);
        res.json(`${numbers} `);
    }
}
exports.calculadora = new Calculadora();
