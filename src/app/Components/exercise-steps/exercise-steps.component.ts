import { Component, Input } from '@angular/core';
import {
  InputFormField,
  MatStepProperties,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-exercise-steps[steps][inputParams]',
  templateUrl: './exercise-steps.component.html',
  styleUrls: ['./exercise-steps.component.scss'],
})
export class ExerciseStepsComponent {
  @Input()
  public steps!: MatStepProperties[];
  @Input()
  public inputParams!: InputFormField[];
}
