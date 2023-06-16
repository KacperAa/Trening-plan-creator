import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DecoratedInputsGroup } from 'src/app/Interfaces/decorated-inputs-group.interface';
import { TitleAndAutocomplete } from 'src/app/Interfaces/title-and-autocomplete.interface';
import { InputAndAutocompletesSwitcher } from 'src/app/Interfaces/input-and-autocompletes-switcher.interface';
import { SwitcherViewState } from 'src/app/Types/view-state';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss'],
})
export class AddExercise {
  @Output()
  public close: EventEmitter<never> = new EventEmitter<never>();
  public addExerciseForm: FormGroup = this._formBuilder.group({
    findExercise: ['' /* Validators.required */],
    specifySeriesScenarioOne: ['' /* Validators.required */],
    specifySeriesScenarioTwo: this._formBuilder.group({
      firstField: ['' /* Validators.required */],
      secondField: ['' /* Validators.required */],
    }),
    specifyRepsFirstScenario: this._formBuilder.group({
      firstField: ['', Validators.required],
      secondField: ['', Validators.required],
    }),
    specifyRepsSecondScenario: this._formBuilder.group({
      firstField: ['', Validators.required],
      secondField: ['', Validators.required],
      thirdField: ['', Validators.required],
    }),
    specifyWeightScenarioOne: ['' /* Validators.required */],
    specifyWeightScenarioTwo: this._formBuilder.group({
      firstField: ['' /* Validators.required */],
      secondField: ['' /* Validators.required */],
    }),
    specifyRate: this._formBuilder.group({
      firstField: ['', Validators.required],
      secondField: ['', Validators.required],
      thirdField: ['', Validators.required],
      fourthField: ['', Validators.required],
    }),
    specifyBreak: this._formBuilder.group({
      firstField: ['', Validators.required],
      secondField: ['', Validators.required],
    }),
    specifyRpeScenarioOne: ['' /* Validators.required */],
    specifyRpeScenarioTwo: this._formBuilder.group({
      firstField: ['' /* Validators.required */],
      secondField: ['' /* Validators.required */],
    }),
  });

  public get specifySeriesScenarioTwo(): FormGroup {
    return this.addExerciseForm.get('specifySeriesScenarioTwo') as FormGroup;
  }

  public get specifyWeightScenarioTwo(): FormGroup {
    return this.addExerciseForm.get('specifyWeightScenarioTwo') as FormGroup;
  }

  get specifyRpeScenarioTwo(): FormGroup {
    return this.addExerciseForm.get('specifyRpeScenarioTwo') as FormGroup;
  }

  public seriesViewScenario: SwitcherViewState = 'default';
  public weightViewScenario: SwitcherViewState = 'default';
  public rpeViewScenario: SwitcherViewState = 'default';

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
        input: {
          matLabel: 'Series',
          placeholder: '...',
          appereance: 'fill',
          formControl: this._getFormControl('specifySeriesScenarioOne'),
        },
      },

      titlesAndAutocompletes: [
        {
          title: 'Series',
          autocomplete: {
            matLabel: 'series...',
            placeholder: '...',
            formControl: this.specifySeriesScenarioTwo?.get(
              'firstField'
            ) as FormControl,
            options: ['+1', '+2', '+3'],
          },
        },
        {
          title: 'Weeks',
          autocomplete: {
            matLabel: 'weeks',
            placeholder: '....',
            formControl: this.specifySeriesScenarioTwo?.get(
              'secondField'
            ) as FormControl,
            options: ['One week', 'Two weeks', 'Three weeks'],
          },
        },
      ],
    },
    {
      inputAndTitle: {
        title: 'Weight',
        icon: 'drag_indicator',
        input: {
          matLabel: 'weight',
          placeholder: '...',
          appereance: 'fill',
          formControl: this._getFormControl('specifyWeightScenarioOne'),
        },
      },

      titlesAndAutocompletes: [
        {
          title: 'Weight',
          autocomplete: {
            matLabel: 'weight...',
            placeholder: '...',
            formControl: this.specifyWeightScenarioTwo.get(
              'firstField'
            ) as FormControl,
            options: ['+1', '+2', '+3'],
          },
        },
        {
          title: 'Weeks',
          autocomplete: {
            matLabel: 'weeks',
            placeholder: '....',
            formControl: this.specifyWeightScenarioTwo.get(
              'secondField'
            ) as FormControl,
            options: ['One week', 'Two weeks', 'Three weeks'],
          },
        },
      ],
    },
    {
      inputAndTitle: {
        title: 'RPE',
        icon: 'drag_indicator',
        input: {
          matLabel: 'RPE',
          placeholder: '...',
          appereance: 'fill',
          formControl: this._getFormControl('specifyRpeScenarioOne'),
        },
      },

      titlesAndAutocompletes: [
        {
          title: 'RPE',
          autocomplete: {
            matLabel: 'RPE...',
            placeholder: '...',
            formControl: this.specifyRpeScenarioTwo.get(
              'firstField'
            ) as FormControl,
            options: ['+1', '+2', '+3'],
          },
        },
        {
          title: 'Weeks',
          autocomplete: {
            matLabel: 'weeks',
            placeholder: '....',
            formControl: this.specifyRpeScenarioTwo.get(
              'secondField'
            ) as FormControl,
            options: ['One week', 'Two weeks', 'Three weeks'],
          },
        },
      ],
    },
  ];

  get seriesSwitcher(): InputAndAutocompletesSwitcher {
    return this.inputAndAutocompletesSwitchers.find(
      (switcher: InputAndAutocompletesSwitcher) =>
        switcher.inputAndTitle.title === 'Series'
    ) as InputAndAutocompletesSwitcher;
  }

  get weighSwitcher(): InputAndAutocompletesSwitcher {
    return this.inputAndAutocompletesSwitchers.find(
      (switcher: InputAndAutocompletesSwitcher) =>
        switcher.inputAndTitle.title === 'Weight'
    ) as InputAndAutocompletesSwitcher;
  }

  get getRpeSwitcher(): InputAndAutocompletesSwitcher {
    return this.inputAndAutocompletesSwitchers.find(
      (switcher: InputAndAutocompletesSwitcher) =>
        switcher.inputAndTitle.title === 'RPE'
    ) as InputAndAutocompletesSwitcher;
  }

  public repsRateAndBreakFields: DecoratedInputsGroup<string>[] = [
    {
      title: 'Reps',
      inputs: [
        {
          matLabel: 'Form',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRepsFirstScenario').get(
            'firstField'
          ) as FormControl,
        },
        {
          matLabel: 'To',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRepsFirstScenario').get(
            'secondField'
          ) as FormControl,
        },
      ],
      hasButton: true,
      buttonTitle: 'Save series separitly',
      customDecoration: '-',
      additionalParam: 'auto',
    },
    {
      title: 'Reps',
      inputs: [
        {
          matLabel: 'S1',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRepsSecondScenario').get(
            'firstField'
          ) as FormControl,
        },
        {
          matLabel: 'S2',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRepsSecondScenario').get(
            'secondField'
          ) as FormControl,
        },
        {
          matLabel: 'S3',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRepsSecondScenario').get(
            'thirdField'
          ) as FormControl,
        },
      ],
      hasButton: true,
      buttonTitle: 'back',
      additionalParam: 'manual',
    },
    {
      title: 'Rate',
      inputs: [
        {
          matLabel: '1',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRate').get(
            'firstField'
          ) as FormControl,
        },
        {
          matLabel: '2',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRate').get(
            'secondField'
          ) as FormControl,
        },
        {
          matLabel: '3',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRate').get(
            'thirdField'
          ) as FormControl,
        },
        {
          matLabel: '3',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyRate').get(
            'fourthField'
          ) as FormControl,
        },
      ],
    },
    {
      title: 'Time',
      inputs: [
        {
          matLabel: 'Min',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyBreak').get(
            'firstField'
          ) as FormControl,
        },
        {
          matLabel: 'Sec',
          placeholder: '...',
          appereance: 'outline',
          formControl: this._getFormGroup('specifyBreak').get(
            'secondField'
          ) as FormControl,
        },
      ],
      customDecoration: ':',
    },
  ];

  get rateAndBreakFields(): DecoratedInputsGroup<string>[] {
    return this.repsRateAndBreakFields.filter(
      (field: DecoratedInputsGroup<string>) => field.title !== 'Reps'
    );
  }

  public repsRangeViewScenario: DecoratedInputsGroup<string> =
    this._setRepsRangeViewScenario('auto');

  constructor(private _formBuilder: FormBuilder) {
    setTimeout(() => {
      console.log(this.repsRangeViewScenario);
    }, 0);
  }

  public captureSwitcherViewScenario(
    viewState: SwitcherViewState,
    switcher: InputAndAutocompletesSwitcher
  ): void {
    switch (switcher.inputAndTitle.title) {
      case 'Series':
        this.seriesViewScenario = viewState;
        break;
      case 'Weight':
        this.weightViewScenario = viewState;
        break;
      case 'RPE':
        this.rpeViewScenario = viewState;
        break;
    }
  }

  public changeRepsRangeViewScenario(): void {
    this.repsRangeViewScenario.additionalParam === 'auto'
      ? (this.repsRangeViewScenario = this._setRepsRangeViewScenario('manual'))
      : (this.repsRangeViewScenario = this._setRepsRangeViewScenario('auto'));
  }

  public _setRepsRangeViewScenario(
    scenario: string
  ): DecoratedInputsGroup<string> {
    return this.repsRateAndBreakFields.find(
      (option: DecoratedInputsGroup<string>) =>
        option.additionalParam === scenario
    ) as DecoratedInputsGroup<string>;
  }

  public _getFormControl(controlName: string): FormControl {
    return this.addExerciseForm.get(controlName) as FormControl;
  }

  public _getFormGroup(groupName: string): FormGroup {
    return this.addExerciseForm.get(groupName) as FormGroup;
  }
}
