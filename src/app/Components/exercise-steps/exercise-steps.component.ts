import { Component, Input } from '@angular/core';

import { MatStepProperties } from 'src/app/Interfaces/mat-step-properties.interface';

@Component({
  selector: 'app-exercise-steps[steps]',
  templateUrl: './exercise-steps.component.html',
  styleUrls: ['./exercise-steps.component.scss'],
})
export class ExerciseStepsComponent {
  @Input()
  public steps!: MatStepProperties[];

  public dupaTest(arg: any): void {
    console.log(arg);
  }
}
