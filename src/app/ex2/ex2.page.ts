import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.page.html',
  styleUrls: ['./ex2.page.scss'],
})

export class Ex2Page {
  private media : number;
  private credito: number;
  private mens: string;

  private Calc(){
    if(!this.media){
      return this.mens = "Por favor, preencha todos os campos";
    }
    if(this.media > 2000){
      this.credito = this.media + (this.media * 0.4); 
      this.mens = "A media salarial é de: R$" + this.media + " e o credito disponivel é de: R$" + this.credito;
    }
    else if (this.media >= 1001 && this.media <= 2000){
      this.credito = this.media + (this.media * 0.3); 
      this.mens = "A media salarial é de: R$" + this.media + " e o credito disponivel é de: R$" + this.credito;
    }
    else if (this.media >= 501 && this.media <= 1000){
      this.credito = this.media + (this.media * 0.2); 
      this.mens = "A media salarial é de: R$" + this.media + " e o credito disponivel é de: R$" + this.credito;
    }
    else {
      this.credito = this.media; 
      this.mens = "A media salarial é de: R$" + this.media + " e não a credito extra disponivel";
    }
  }

}
