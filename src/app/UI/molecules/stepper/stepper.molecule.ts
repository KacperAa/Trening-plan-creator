import { Component, Input } from '@angular/core';
import {
  InputFormField,
  MatStepProperties,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-stepper[steps][inputParams]',
  templateUrl: './stepper.molecule.html',
  styleUrls: ['./stepper.molecule.scss'],
})
export class StepperComponent {
  @Input()
  public steps!: MatStepProperties[];
  @Input()
  public inputParams!: InputFormField[];
}
