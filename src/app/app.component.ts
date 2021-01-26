import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { incrementar, decrementar } from './contador/contador.action';

interface AppState {
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contador: number = 0;
  title: string;
  

  constructor(){
    this.contador = 10;
  }

  incrementar(){
    this.contador += 1;
  }
  
  decrementar(){
    this.contador -= 1;
  }

  asignCont(newCont: number): void {
    this.contador = newCont;
  }
}





















