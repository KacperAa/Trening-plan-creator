import { Component, Input } from '@angular/core';
import { RadioButtonsDialogWithTitle } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-title-and-radio-button[data]',
  templateUrl: './title-and-radio-button.molecule.html',
  styleUrls: ['./title-and-radio-button.molecule.scss'],
})
export class TitleAndRadioButtonComponent {
  @Input()
  public data!: RadioButtonsDialogWithTitle;
}
