import { Type } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatRow } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RadioButtonsAndChartComponent } from '../Components/radio-buttons-and-chart/radio-buttons-and-chart.component';
import { PeriodicElementt } from '../content/today-trening/today-trening.component';
import { GenericParam } from './checkboxs-and-title.interface';
import { MatDialogData } from './mat-dialog-data.interface';
import { MatAutocompleteData } from './mat-autocomplete-data.interface';
import { InputFormField } from './input-form-field.interface';

export interface ChipsWithTitle {
  title: string;
  chips: Chips[];
}

export interface Chips {
  text: string;
  selected?: boolean;
}

export interface InputAndTitle {
  title: string;
  inputData: InputFormField;
  additionalParam?: GenericParam<string>;
}

export interface InputsAndTitle {
  title: string;
  inputsData: InputAndTitle[];
}

export interface TitleAndAutocomplete {
  title: string;
  autocomplete: MatAutocompleteData;
}

export interface InputTitleIcon {
  title: string;
  icon: string;
  input: InputFormField;
}

export interface InputAndAutocompletesSwitcher {
  inputAndTitle: InputTitleIcon;
  autocompletesAndTitles: TitleAndAutocomplete[];
}

export interface TableRowAndCellKey {
  row: MatRow | any;
  cellKey: string;
}

export interface ColumnAndText {
  column: string;
  text: string;
}
