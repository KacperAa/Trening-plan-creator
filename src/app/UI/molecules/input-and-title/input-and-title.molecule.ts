import { Component, Input } from '@angular/core';
import { InputAndTitle } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-input-and-title[data]',
  templateUrl: './input-and-title.molecule.html',
  styleUrls: ['./input-and-title.molecule.scss'],
})
export class InputAndTitleComponent {
  @Input()
  public data!: InputAndTitle;
}
