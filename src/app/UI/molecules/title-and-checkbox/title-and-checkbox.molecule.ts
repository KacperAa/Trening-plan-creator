import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-title-and-checkbox[checkboxData]',
  templateUrl: './title-and-checkbox.molecule.html',
  styleUrls: ['./title-and-checkbox.molecule.scss'],
})
export class TreningParamCheckboxComponent {
  @Input()
  public checkboxData!: CheckboxData;
  @Output()
  public emitControlsGroupValue: EventEmitter<object> =
    new EventEmitter<object>();
}
