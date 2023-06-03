import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipListboxChange } from '@angular/material/chips';
import { StepperOrientation } from '@angular/material/stepper';
import { Subscription, fromEvent } from 'rxjs';
import { ChipsWithTitle } from 'src/app/Interfaces/interfaces';
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
  public checkboxesViewScenario: string = 'Regular';
  public planCreatorForm: FormGroup = this._formBuilder.group({
    createTemplate: ['', Validators.required],
    checkboxesScenarios: this._formBuilder.group({
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
        { validators: [oneRequiredField] }
      ),
      secondWeek: this._formBuilder.group(
        {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
        { validators: [oneRequiredField] }
      ),
    }),
  });

  get getCheckboxesScenariosFormGroup(): FormGroup {
    return this.planCreatorForm.get('checkboxesScenarios') as FormGroup;
  }

  public matChipsData: ChipsWithTitle = {
    title:
      'Regular training (in case of predetermined days) / flexible (in case of different training days)',
    chips: [{ text: 'Regular', selected: true }, { text: 'Elastic' }],
  };

  public radioButtonsData: RadioButtonsDialogWithTitle = {
    title: 'Create template',
    buttons: [
      { title: 'Single week', hasDialog: false },
      { title: 'A few weeks', hasDialog: true },
    ],
    selectedOption: 'Single week',
    dialogData: {
      title: 'trening',
      placeholder: 'number',
      inputValue: '',
      unit: 'times a week',
    },
  };

  public checkboxsData: CheckboxsAndTitle[] = [
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
      additionalData: { type: 'Regular' },
    },

    {
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
      additionalData: { type: 'Elastic' },
    },
  ];
  private _subs = new Subscription();

  constructor(
    private _formBuilder: FormBuilder,
    private _viewportRuler: ViewportRuler
  ) {}

  public ngOnInit(): void {
    this._trackWindowWidth();
  }
  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public captureChipValue(chipChange: MatChipListboxChange): void {
    this.checkboxesViewScenario = chipChange.value;
  }

  public getCheckboxesDataScenario(): CheckboxsAndTitle[] {
    return this.checkboxesViewScenario === 'Regular'
      ? this._getRegularScenario()
      : this.checkboxsData;
  }

  public setCheckboxesFormScenario(): FormGroup {
    return this.checkboxesViewScenario === 'Regular'
      ? this._getScenariosFormGroup('firstWeek')
      : this.getCheckboxesScenariosFormGroup;
  }

  private _getScenariosFormGroup(key: string): FormGroup {
    return this.getCheckboxesScenariosFormGroup.get(key) as FormGroup;
  }

  private _getRegularScenario(): CheckboxsAndTitle[] {
    return this.checkboxsData.filter(
      (checkboxsField: CheckboxsAndTitle) =>
        checkboxsField.additionalData!['type'] === 'Regular'
    );
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
