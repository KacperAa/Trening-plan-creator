import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputsFormField } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-form-field[formField]',
  templateUrl: './form-field.molecule.html',
  styleUrls: ['./form-field.molecule.scss'],
})
export class FormFieldComponent {
  @Input()
  public formField!: InputsFormField;
  @Output()
  public emitClickEvent: EventEmitter<never> = new EventEmitter<never>();
}
