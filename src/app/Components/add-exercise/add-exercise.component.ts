import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  InputAndAutocompletesSwitcher,
  DecoratedInputsGroup,
  TitleAndAutocomplete,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss'],
})
export class AddExercise {
  @Output()
  public close: EventEmitter<never> = new EventEmitter<never>();
  public addExerciseForm: FormGroup = this._formBuilder.group({
    findExercise: ['', Validators.required],
    specifySeries: ['', Validators.required],
    specifyReps: ['', Validators.required],
    specifyWeight: ['', Validators.required],
    specifyRate: ['', Validators.required],
    specifyBreak: ['', Validators.required],
    specifyRpe: ['', Validators.required],
  });

  public exerciseData: TitleAndAutocomplete = {
    title: 'Exercise',
    autocomplete: {
      matLabel: 'Name',
      placeholder: 'Find exercise..',
      formControl: this._getFormControl('findExercise'),
      options: ['one', 'two', 'three'],
    },
  };

  public inputAndAutocompletesSwitchers: InputAndAutocompletesSwitcher[] = [
    {
      inputAndTitle: {
        title: 'Series',
        icon: 'drag_indicator',
        input: { matLabel: 'Series', placeholder: '...', appereance: 'fill' },
      },
      autocompletesAndTitles: [
        {
          title: 'Series',
          autocomplete: {
            matLabel: 'series...',
            placeholder: '...',
            formControl: new FormControl(),
            options: ['+1', '+2', '+3'],
          },
        },
        {
          title: 'Weeks',
          autocomplete: {
            matLabel: 'weeks',
            placeholder: '....',
            formControl: new FormControl(),
            options: ['One week', 'Two weeks', 'Three weeks'],
          },
        },
      ],
    },
    {
      inputAndTitle: {
        title: 'Weight',
        icon: 'drag_indicator',
        input: { matLabel: 'weight', placeholder: '...', appereance: 'fill' },
      },
      autocompletesAndTitles: [
        {
          title: 'Weight',
          autocomplete: {
            matLabel: 'weight...',
            placeholder: '...',
            formControl: new FormControl(),
            options: ['+1', '+2', '+3'],
          },
        },
        {
          title: 'Weeks',
          autocomplete: {
            matLabel: 'weeks',
            placeholder: '....',
            formControl: new FormControl(),
            options: ['One week', 'Two weeks', 'Three weeks'],
          },
        },
      ],
    },
    {
      inputAndTitle: {
        title: 'RPE',
        icon: 'drag_indicator',
        input: { matLabel: 'RPE', placeholder: '...', appereance: 'fill' },
      },
      autocompletesAndTitles: [
        {
          title: 'RPE',
          autocomplete: {
            matLabel: 'RPE...',
            placeholder: '...',
            formControl: new FormControl(),
            options: ['+1', '+2', '+3'],
          },
        },
        {
          title: 'Weeks',
          autocomplete: {
            matLabel: 'weeks',
            placeholder: '....',
            formControl: new FormControl(),
            options: ['One week', 'Two weeks', 'Three weeks'],
          },
        },
      ],
    },
  ];

  get getRpeSwitcher(): InputAndAutocompletesSwitcher {
    return this.inputAndAutocompletesSwitchers.find(
      (switcher: InputAndAutocompletesSwitcher) =>
        switcher.inputAndTitle.title === 'RPE'
    ) as InputAndAutocompletesSwitcher;
  }

  public repsRateAndBreakFields: DecoratedInputsGroup[] = [
    {
      title: 'Reps',
      inputs: [
        { matLabel: 'Form', placeholder: '...', appereance: 'outline' },
        {
          matLabel: 'To',
          placeholder: '...',
          appereance: 'outline',
        },
      ],
      hasButton: true,
      buttonTitle: 'Save series separitly',
      customDecoration: '-',
      additionalParam: { scenario: 'auto' },
    },
    {
      title: 'Reps',
      inputs: [
        { matLabel: 'S1', placeholder: '...', appereance: 'outline' },
        { matLabel: 'S2', placeholder: '...', appereance: 'outline' },
        { matLabel: 'S3', placeholder: '...', appereance: 'outline' },
      ],
      hasButton: true,
      buttonTitle: 'back',
      additionalParam: { scenario: 'manual' },
    },
    {
      title: 'Rate',
      inputs: [
        { matLabel: '1', placeholder: '...', appereance: 'outline' },
        { matLabel: '2', placeholder: '...', appereance: 'outline' },
        { matLabel: '3', placeholder: '...', appereance: 'outline' },
        { matLabel: '3', placeholder: '...', appereance: 'outline' },
      ],
    },
    {
      title: 'Time',
      inputs: [
        { matLabel: 'Min', placeholder: '...', appereance: 'outline' },
        { matLabel: 'Sec', placeholder: '...', appereance: 'outline' },
      ],
      customDecoration: ':',
    },
  ];

  get rateAndBreakFields(): DecoratedInputsGroup[] {
    return this.repsRateAndBreakFields.filter(
      (field: DecoratedInputsGroup) => field.title !== 'Reps'
    );
  }

  public repsRangeViewScenario: DecoratedInputsGroup =
    this._setRepsRangeViewScenario('auto');

  constructor(private _formBuilder: FormBuilder) {}

  public changeRepsRangeViewScenario(): void {
    this.repsRangeViewScenario.additionalParam!['scenario'] === 'auto'
      ? (this.repsRangeViewScenario = this._setRepsRangeViewScenario('manual'))
      : (this.repsRangeViewScenario = this._setRepsRangeViewScenario('auto'));
  }

  public _setRepsRangeViewScenario(scenario: string): DecoratedInputsGroup {
    return this.repsRateAndBreakFields.find(
      (option: DecoratedInputsGroup) =>
        option.additionalParam!['scenario'] === scenario
    ) as DecoratedInputsGroup;
  }

  private _getFormControl(controlName: string): FormControl {
    return this.addExerciseForm.get(controlName) as FormControl;
  }
}

/*     value accesor pozwala w innym miejsu apilakcji moge nasluchac zdazenie ktore sie wydarzolo w kontrolne obiekten dostaje dane formularz */
