import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioButtonsData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-title-and-radio-button[radioButtonsData]',
  templateUrl: './title-and-radio-button.molecule.html',
  styleUrls: ['./title-and-radio-button.molecule.scss'],
})
export class TitleAndRadioButtonComponent {
  @Input()
  public radioButtonsData!: RadioButtonsData;
  @Output()
  public emitSelectedOption: EventEmitter<string> = new EventEmitter<string>();
}
