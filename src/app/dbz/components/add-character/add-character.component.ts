import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  characterList: any;

  public onNewCharacter(character: Character): void {
    this.characterList.unshift(character);
  }
}


