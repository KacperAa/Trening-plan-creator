import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  InputFormField,
  MatStepProperties,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-exercise-performed',
  templateUrl: './exercise-performed.component.html',
  styleUrls: ['./exercise-performed.component.scss'],
})
export class ExercisePerformedComponent {
  public header: string = 'Bench press 3series 12/12/12';
  public formGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  public steps: MatStepProperties[] = [
    {
      formGroup: this.formGroup,
      title: 'Serie One',
      formControlName: 'firstCtrl',
    },
    {
      formGroup: this.formGroup,
      title: 'Serie Two',
      formControlName: 'firstCtrl',
    },
    {
      formGroup: this.formGroup,
      title: 'Serie Three',
      formControlName: 'firstCtrl',
    },
  ]; /* będzie do zmiany po pracy nad formsami */

  public inputParams: InputFormField[] = [
    {
      matLabel: 'Reps',
      placeholder: '...',
      appereance: 'outline',
    },
    { matLabel: 'RPE', placeholder: '...', appereance: 'outline' },
  ];
}
