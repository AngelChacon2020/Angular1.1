import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
  ]
  public onDeleteCharacter(index: number): void {
    this.characterList.splice(index, 1);
  }
  public onNewCharacter(character: Character): void {
    this.characterList.unshift(character);
  }



}
