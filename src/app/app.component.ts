import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   public title: String  = 'hOAL MUNDO';

   public counter: number = 5;

  increBy( value: number):void {
    this.counter += value;
  }
restCounter(){
  this.counter = 10;
}

 }

