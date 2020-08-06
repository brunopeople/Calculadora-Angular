/*
* Serviço responável por executar as operações da calculadora.
* 
* @author Bruno Pessoa Nunes de Melo <brunopessoa.melo@gmail.com>
* @since 1.0.0 
*/ 


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * Define as contantes utilizadas
   * para identificar as operações de cáculo 
   * */

   static readonly SOMA: string = '+';
   static readonly SUBTRACAO: string = '-';
   static readonly DIVISAO: string = '/';
   static readonly RAIZ: string = 'Raiz'; 
   static readonly MULTIPLICACAO = '*';
   
  constructor() { }
/***
 * Método que calcula uma operação matemática dado 
 * dois números.
 * Suporta as operações soma, subtração, divisão, multiplicação e Raiz quadrada /
 * @param num1 number
 * @param num2 number
 * @param operacao string Operação a ser executada
 * @return number Resultado da Operação
 */
  

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // variavel local que armazena o resultado da operação, apenas nesta operação.
    
     switch(operacao) {
      case CalculadoraService.SOMA:
         resultado = num1 + num2;
       break;
    
       case CalculadoraService.SUBTRACAO:
         resultado = num1 - num2;
       break;
    
       case CalculadoraService.DIVISAO:
         resultado = num1/num2;
       break;
       
       case CalculadoraService.MULTIPLICACAO:
         resultado = num1 * num2;
       break;
    
       case CalculadoraService.RAIZ:
         resultado = Math.sqrt(num1);
    
       break;
         default: 
         resultado = 0; 
     }
      return  resultado = 0;
    }
}
