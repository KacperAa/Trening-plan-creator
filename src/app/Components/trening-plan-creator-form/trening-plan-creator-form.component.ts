import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatChipListboxChange } from '@angular/material/chips';
import { StepperOrientation } from '@angular/material/stepper';
import { Subscription, fromEvent } from 'rxjs';
import { CheckboxData, RadioButtonsData } from 'src/app/Interfaces/interfaces';
import { atLeastOneRequiredField } from 'src/app/Validators/validators';

@Component({
  selector: 'app-trening-plan-creator-form',
  templateUrl: './trening-plan-creator-form.component.html',
  styleUrls: ['./trening-plan-creator-form.component.scss'],
})
export class TreningPlanCreatorFormComponent implements OnDestroy {
  public isOpenedElasticPlan: boolean = false;
  public stepperOrientation: StepperOrientation = this._checkSmallDevice();
  public title: string =
    'Regular training (in case of predetermined days) / flexible (in case of different training days)';
  public radioButtonsData: RadioButtonsData = {
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
  private _subs = new Subscription();

  constructor(
    private _formBuilder: FormBuilder,
    private _viewportRuler: ViewportRuler
  ) {
    this._trackWindowWidth();
  }
  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public openElasticPlanForm(option: MatChipListboxChange): void {
    this.isOpenedElasticPlan = option.value === 'Elastic';
  }

  public checkboxsDataTreningDays: CheckboxData = {
    formGroup: this._formBuilder.group(
      {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      { validators: [atLeastOneRequiredField] }
    ),
    title: 'Select trening days:',
    button: [
      { text: 'Monday', formControlName: 'monday' },
      { text: 'Tuesday', formControlName: 'tuesday' },
      { text: 'Wednesday', formControlName: 'wednesday' },
      { text: 'Thursday', formControlName: 'thursday' },
      { text: 'Friday', formControlName: 'friday' },
      { text: 'Saturday', formControlName: 'saturday' },
      { text: 'Sunday', formControlName: 'sunday' },
    ],
  };

  public checkboxsDataSecondWeek: CheckboxData = {
    formGroup: this._formBuilder.group(
      {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      { validators: [atLeastOneRequiredField] }
    ),
    title: 'Select trening days:',
    button: [
      { text: 'Monday', formControlName: 'monday' },
      { text: 'Tuesday', formControlName: 'tuesday' },
      { text: 'Wednesday', formControlName: 'wednesday' },
      { text: 'Thursday', formControlName: 'thursday' },
      { text: 'Friday', formControlName: 'friday' },
      { text: 'Saturday', formControlName: 'saturday' },
      { text: 'Sunday', formControlName: 'sunday' },
    ],
  };

  public additionalParamsCheckboxData: CheckboxData = {
    formGroup: this._formBuilder.group({
      weight: false,
      RPE: false,
      breakTime: false,
      rate: false,
    }),

    title: 'Select additional training parameters:',
    button: [
      { text: 'Weight', formControlName: 'weight' },
      { text: 'RPE', formControlName: 'RPE' },
      { text: 'Break time', formControlName: 'breakTime' },
      { text: 'Rate', formControlName: 'rate' },
    ],
  };

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
