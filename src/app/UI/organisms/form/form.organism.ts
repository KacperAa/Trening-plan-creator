import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  CheckboxData,
  MatAutocompeteData,
  RadioButtonsData,
  InputFormField,
  InputsFormField,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-form',
  templateUrl: './form.organism.html',
  styleUrls: ['./form.organism.scss'],
})
export class AddExcerciseFormComponent {
  @Output()
  public emitButtonEvent = new EventEmitter<never>();
  public isOpenedIntervalForm: boolean = true;

  constructor(private _fb: FormBuilder) {}

  public matAutocompleteData: MatAutocompeteData = {
    title: null,
    matLabel: 'Ex name',
    placeholder: 'Search ex...',
    formControl: new FormControl(''),
    options: ['One', 'Two', 'Three'],
  };
  public formFields: InputsFormField[] = [
    {
      title: 'Reps',
      appereance: 'outline',
      placeholder: '...',
      inputs: [
        { text: 'From', hasDecoration: true },
        { text: 'To', hasDecoration: false },
      ],
      isOpen: true,
      hasButton: true,
      buttonTitle: 'Save series separitly',
      partingDecoration: '-',
    },
    {
      title: 'Reps',
      appereance: 'outline',
      inputs: [
        { text: 'S1', hasDecoration: true },
        { text: 'S2', hasDecoration: true },
        { text: 'S3', hasDecoration: false },
      ],
      placeholder: '...',
      isOpen: false,
      hasButton: true,
      buttonTitle: 'back',
      partingDecoration: '/',
    },
    {
      title: 'Rate',
      appereance: 'outline',
      placeholder: '...',
      inputs: [
        { text: 'Excentric', hasDecoration: true },
        { text: 'Pause', hasDecoration: true },
        { text: 'Concentric', hasDecoration: true },
        { text: 'Break', hasDecoration: false },
      ],
      isOpen: true,
      partingDecoration: '/',
    },
  ];

  public radioButtonsFieldData: RadioButtonsData[] = [
    {
      title: 'Weight per week',
      buttons: [
        {
          title: '+ x weight per week',
          hasDialog: true,
        },
        {
          title: '+ x weight per two week',
          hasDialog: true,
        },
        {
          title: '+ x weight per three week',
          hasDialog: true,
        },
      ],
      selectedOption: '',
      dialogData: {
        title: 'Weight',
        placeholder: 'Weight...',
        unit: 'Kg',
        inputValue: '',
      },
    },
    {
      title: 'Add serie per week',
      buttons: [
        { title: 'per one week', hasDialog: true },
        { title: 'per two week', hasDialog: true },
        { title: 'per three week', hasDialog: true },
      ],
      selectedOption: '',
      dialogData: {
        title: 'Series',
        placeholder: 'Add series....',
        unit: 'S',
        inputValue: '',
      },
    },
    {
      title: 'Incarase RPE per week',
      buttons: [
        { title: 'per one week', hasDialog: true },
        { title: 'per two week', hasDialog: true },
        { title: 'per three week', hasDialog: true },
      ],
      selectedOption: '',
      dialogData: {
        title: 'RPE INC',
        placeholder: 'RPE...',
        unit: 'RPE',
        inputValue: '',
      },
    },
  ];

  public changeFormField(): void {
    if (this.formFields[0].isOpen === true) {
      this.formFields[0].isOpen = false;
      this.formFields[1].isOpen = true;
    } else if (this.formFields[1].isOpen === true) {
      this.formFields[1].isOpen = false;
      this.formFields[0].isOpen = true;
    }
  }

  public checkboxsesField: CheckboxData = {
    formGroup: this._fb.group({
      weightProgressPerWeek: false,
      weightProgressPerTwoWeek: false,
      addSeriePerWeek: false,
    }),
    title: 'Select trening days:',
    button: [
      { text: 'weight per week', formControlName: 'weightProgressPerWeek' },
      { text: 'series per week', formControlName: 'weightProgressPerTwoWeek' },
      { text: 'rpe per week', formControlName: 'addSeriePerWeek' },
    ],
  };

  public inputFormFields: InputFormField[] = [
    {
      title: null,
      matLabel: 'Series',
      placeholder: '...',
      appereance: 'fill',
    },
    {
      title: null,
      matLabel: 'RPE',
      placeholder: '...',
      appereance: 'outline',
    },
    {
      title: null,
      matLabel: 'Break',
      placeholder: '...',
      appereance: 'outline',
    },
  ];
}
