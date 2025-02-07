import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>counter: {{ counter}}</h3>
<button (click)="increBy(+1)">+1</button>

<button (click)="restCounter()">Resset</button>
<button (click)="increBy(-1)">-1</button>
  `
})

export class CountComponent {

  public counter: number = 5;

  increBy( value: number):void {
    this.counter += value;
  }
restCounter(){
  this.counter = 10;
}
}
