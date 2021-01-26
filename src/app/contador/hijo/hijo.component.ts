import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {
   
  @Input() contador: number;
  @Output() changeCont = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(): void {
    this.contador *= 2;
    this.changeCont.emit(this.contador);
  }
  
  dividir(): void {
    this.contador /= 2;
    this.changeCont.emit(this.contador);
  }

  resetHijo(newCont: number): void {
    this.contador = newCont;
    this.changeCont.emit(newCont);
  }
}
