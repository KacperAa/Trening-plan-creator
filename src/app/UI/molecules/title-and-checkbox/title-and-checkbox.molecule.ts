import { Component, Input } from '@angular/core';
import { CheckboxsAndTitle } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-title-and-checkbox[data]',
  templateUrl: './title-and-checkbox.molecule.html',
  styleUrls: ['./title-and-checkbox.molecule.scss'],
})
export class TitleAndCheckboxComponent {
  @Input()
  public data!: CheckboxsAndTitle;
}
