import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { Subscription, fromEvent } from 'rxjs';
import { ChipsWithTitle } from 'src/app/Interfaces/chips-with-title.interface';
import { oneRequiredField } from 'src/app/Validators/validators';
import { CheckboxsAndTitle } from 'src/app/Interfaces/checkboxs-and-title.interface';
import { RadioButtonsDialogWithTitle } from 'src/app/Interfaces/radio-buttons-dialog-with-title.interace';

@Component({
  selector: 'app-trening-plan-creator',
  templateUrl: './trening-plan-creator.component.html',
  styleUrls: ['./trening-plan-creator.component.scss'],
})
export class TreningPlanCreatorComponent implements OnInit, OnDestroy {
  public stepperOrientation: StepperOrientation = this._checkSmallDevice();
  public planCreatorForm!: FormGroup;
  public checkboxsData!: CheckboxsAndTitle[];
  public matChipsData!: ChipsWithTitle;
  public radioButtonsData!: RadioButtonsDialogWithTitle;
  get tableGenerationForm(): FormGroup {
    return this.planCreatorForm.get('tableGenerationForm') as FormGroup;
  }
  get getCheckboxesScenariosFormGroup(): FormGroup {
    return this.planCreatorForm.get('checkboxesScenariosForms') as FormGroup;
  }
  private _subs = new Subscription();

  constructor(
    private _formBuilder: FormBuilder,
    private _viewportRuler: ViewportRuler
  ) {
    this._setFormGroup();
  }

  public ngOnInit(): void {
    this._setRadioButtonsData();
    this._setChipsData();
    this._setCheckboxData();
    this._trackWindowWidth();
  }
  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public markFormAsTouched(formGroup: FormGroup): void {
    formGroup.markAsTouched();
  }

  public checkIsMainFormValid(): void {
    console.log(this.planCreatorForm.valid);
  }

  public chooseCheckboxesScenario(scenario: string): void {
    if (scenario === 'Elastic' && this.checkboxsData.length < 2) {
      this._setElasticScenario();
    } else if (this.checkboxsData.length > 1) {
      this._setRegularScenario();
    }
  }

  private _setFormGroup(): void {
    this.planCreatorForm = this._formBuilder.group({
      tableGenerationForm: this._formBuilder.group({
        firstControl: new FormControl('Single week', Validators.required),
      }),
      checkboxesScenariosForms: this._formBuilder.group({
        firstWeek: this._formBuilder.group(
          {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
          },
          { validators: oneRequiredField } as AbstractControlOptions
        ),
      }),
    });
  }

  private _setRadioButtonsData(): void {
    this.radioButtonsData = {
      title: 'Create template',
      buttons: [
        { title: 'Single week', hasDialog: false },
        { title: 'A few weeks', hasDialog: true },
      ],

      dialogData: {
        title: 'trening',
        placeholder: 'number',
        inputValue: '',
        unit: 'times a week',
      },
    };
  }

  private _setChipsData(): void {
    this.matChipsData = {
      title:
        'Regular training (in case of predetermined days) / flexible (in case of different training days)',
      chips: [{ text: 'Regular', selected: true }, { text: 'Elastic' }],
    };
  }

  private _setCheckboxData(): void {
    this.checkboxsData = [
      {
        title: 'Select trening days:',
        formGroup: this._getScenariosFormGroup('firstWeek'),
        buttons: [
          { text: 'Monday', formControlName: 'monday' },
          { text: 'Tuesday', formControlName: 'tuesday' },
          { text: 'Wednesday', formControlName: 'wednesday' },
          { text: 'Thursday', formControlName: 'thursday' },
          { text: 'Friday', formControlName: 'friday' },
          { text: 'Saturday', formControlName: 'saturday' },
          { text: 'Sunday', formControlName: 'sunday' },
        ],
      },
    ];
  }

  private _getScenariosFormGroup(key: string): FormGroup {
    return this.getCheckboxesScenariosFormGroup.get(key) as FormGroup;
  }

  private _addSecondScenarioFormGroup(): FormGroup {
    const secondWeek = this._formBuilder.group(
      {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      { validators: oneRequiredField } as AbstractControlOptions
    );
    this.getCheckboxesScenariosFormGroup.addControl('secondWeek', secondWeek);

    return this.getCheckboxesScenariosFormGroup;
  }

  private _setElasticScenario(): void {
    this._addSecondScenarioFormGroup();
    this.checkboxsData.push({
      title: 'Select trening days:',
      formGroup: this._getScenariosFormGroup('secondWeek'),
      buttons: [
        { text: 'Monday', formControlName: 'monday' },
        { text: 'Tuesday', formControlName: 'tuesday' },
        { text: 'Wednesday', formControlName: 'wednesday' },
        { text: 'Thursday', formControlName: 'thursday' },
        { text: 'Friday', formControlName: 'friday' },
        { text: 'Saturday', formControlName: 'saturday' },
        { text: 'Sunday', formControlName: 'sunday' },
      ],
    });
  }

  private _setRegularScenario(): void {
    this.checkboxsData.pop();
  }

  private _checkSmallDevice(): StepperOrientation {
    const windowWidth = this._viewportRuler.getViewportSize().width;
    return windowWidth < 820 ? 'vertical' : 'horizontal';
  }

  private _trackWindowWidth(): void {
    this._subs.add(
      fromEvent(window, 'resize').subscribe(() => {
        this.stepperOrientation = this._checkSmallDevice();
      })
    );
  }
}
