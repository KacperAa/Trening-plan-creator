import { Component, Input } from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/input-form-field.interface';
import { MatStepProperties } from 'src/app/Interfaces/mat-step-properties.interface';

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
