import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.page.html',
  styleUrls: ['./ex3.page.scss'],
})
export class Ex3Page{
  private salario : number;
  private aumento: number;
  private percent : number;
  private mens: string;

  private Calc(){
    if(!this.salario || !this.percent){
      return this.mens = "Por favor, preencha todos os campos";
    }
    this.aumento = this.salario + (this.salario * (this.percent / 100)); 
    this.mens = "O novo salario será: R$" + this.aumento + " com um aumento de: R$" + (this.salario * (this.percent / 100)) + "(" + (this.percent) + "%)";
  }

}
