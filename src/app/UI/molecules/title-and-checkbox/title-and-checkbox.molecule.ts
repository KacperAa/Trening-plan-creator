import { Component, Input } from '@angular/core';
import { CheckboxsAndTitle } from 'src/app/Interfaces/checkboxs-and-title.interface';

@Component({
  selector: 'ui-title-and-checkbox[data]',
  templateUrl: './title-and-checkbox.molecule.html',
  styleUrls: ['./title-and-checkbox.molecule.scss'],
})
export class TitleAndCheckboxComponent {
  @Input()
  public data!: CheckboxsAndTitle<string>;
}
