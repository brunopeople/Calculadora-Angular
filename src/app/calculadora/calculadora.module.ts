import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './componentes';
import {CalculadoraService} from './services';


@NgModule({
  declarations: 
  [CalculadoraComponent
  ],

  exports:[
    CalculadoraComponent
  ],

  providers:[
    CalculadoraService
  ],

  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
