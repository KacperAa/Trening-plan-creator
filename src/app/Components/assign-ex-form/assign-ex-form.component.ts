import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  InputFormField,
  InputParams,
  MatStepProperties,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-assign-ex-form',
  templateUrl: './assign-ex-form.component.html',
  styleUrls: ['./assign-ex-form.component.scss'],
})
export class AssignExFormComponent {
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
  ];

  public inputParams: InputFormField[] = [
    {
      title: null,
      matLabel: 'Reps',
      placeholder: '...',
      appereance: 'outline',
    },
    { title: null, matLabel: 'RPE', placeholder: '...', appereance: 'outline' },
  ];
}
