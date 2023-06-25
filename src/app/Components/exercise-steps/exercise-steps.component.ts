import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DecoratedInputsGroup } from 'src/app/Interfaces/decorated-inputs-group.interface';
import { MatStepProperties } from 'src/app/Interfaces/mat-step-properties.interface';
import { FormsErrorsService } from 'src/app/Services/forms-errors.service';

@Component({
  selector: 'app-exercise-steps[steps]',
  templateUrl: './exercise-steps.component.html',
  styleUrls: ['./exercise-steps.component.scss'],
})
export class ExerciseStepsComponent {
  @Input()
  public steps!: MatStepProperties[];

  constructor(private _setErrorsServie: FormsErrorsService) {}

  public onSubmit(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      this._markControlsAsTouched(formGroup);
    }
  }

  public createDecoratedInputs(
    step: MatStepProperties
  ): DecoratedInputsGroup<undefined> {
    const decoratedInputs = {
      title: '',
      inputs: step.inputsData,
      customDecoration: '|',
    };

    return decoratedInputs;
  }

  private _markControlsAsTouched(formGroup: FormGroup): void {
    formGroup.get('repsControl')?.markAsTouched();
    formGroup.get('rpeControl')?.markAsTouched();
  }
}
