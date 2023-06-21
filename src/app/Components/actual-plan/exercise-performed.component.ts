import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepProperties } from 'src/app/Interfaces/mat-step-properties.interface';

@Component({
  selector: 'app-exercise-performed',
  templateUrl: './exercise-performed.component.html',
  styleUrls: ['./exercise-performed.component.scss'],
})
export class ExercisePerformedComponent implements OnInit {
  public header: string = 'Bench press 3series 12/12/12';
  public performSeriesFormGroup!: FormGroup;
  public steps!: MatStepProperties[];

  constructor(private _formBuilder: FormBuilder) {
    this._setFormGroup();
  }

  public ngOnInit(): void {
    this._setSteps();
  }

  private _setFormGroup(): void {
    this.performSeriesFormGroup = this._formBuilder.group({
      firstStep: this._formBuilder.group({
        repsControl: ['', Validators.required],
        rpeControl: ['', Validators.required],
      }),
      secondStep: this._formBuilder.group({
        repsControl: ['', Validators.required],
        rpeControl: ['', Validators.required],
      }),
      thirdStep: this._formBuilder.group({
        repsControl: ['', Validators.required],
        rpeControl: ['', Validators.required],
      }),
    });
  }

  public get firstStep(): FormGroup {
    return this.performSeriesFormGroup.get('firstStep') as FormGroup;
  }
  public get secondStep(): FormGroup {
    return this.performSeriesFormGroup.get('secondStep') as FormGroup;
  }
  public get thirdStep(): FormGroup {
    return this.performSeriesFormGroup.get('thirdStep') as FormGroup;
  }

  private _setSteps(): void {
    this.steps = [
      {
        title: 'Serie One',
        formGroup: this.firstStep,
        inputsData: [
          {
            matLabel: 'Reps',
            placeholder: '...',
            appereance: 'outline',
            formControl: this.firstStep.get('repsControl') as FormControl,
          },
          {
            matLabel: 'RPE',
            placeholder: '...',
            appereance: 'outline',
            formControl: this.firstStep.get('rpeControl') as FormControl,
          },
        ],
      },
      {
        title: 'Serie Two',
        formGroup: this.secondStep,
        inputsData: [
          {
            matLabel: 'Reps',
            placeholder: '...',
            appereance: 'outline',
            formControl: this.secondStep.get('repsControl') as FormControl,
          },
          {
            matLabel: 'RPE',
            placeholder: '...',
            appereance: 'outline',
            formControl: this.secondStep.get('rpeControl') as FormControl,
          },
        ],
      },
      {
        title: 'Serie Three',
        formGroup: this.thirdStep,
        inputsData: [
          {
            matLabel: 'Reps',
            placeholder: '...',
            appereance: 'outline',
            formControl: this.thirdStep.get('repsControl') as FormControl,
          },
          {
            matLabel: 'RPE',
            placeholder: '...',
            appereance: 'outline',
            formControl: this.thirdStep.get('rpeControl') as FormControl,
          },
        ],
      },
    ];
  }
}
