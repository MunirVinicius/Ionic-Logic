import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private name: string;
  private n1: number;
  private n2: number;
  private n3: number;
  private n4: number;
  private n5: number;
  private result : number;
  private mens : string;

  private Calc(){
    if(!this.name || !this.n1 || !this.n2 || !this.n3 || !this.n4 || !this.n5){
      return this.mens = "Por favor, preencha todos os campos";
    }
    this.result = (this.n1 + this.n2 + this.n3 + this.n4 + this.n5)/5;
    if(this.result < 5 ){
      this.mens = this.name + " com a media de: " + this.result + " foi Reprovado"; 
    }
    else{
      this.mens = this.name + " com a media de: " + this.result + " foi Aprovado"; 
    }
  }

}
