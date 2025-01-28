import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   public title: String  = 'hOAL MUNDO';

   public couter: number = 5;

  increBy( value: number):void {
    this.couter +=value;
  };
 reset(){
this.couter =10;

 }

}
