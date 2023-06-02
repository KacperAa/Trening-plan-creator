import { Component, Type } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatRow } from '@angular/material/table';
import { format } from 'date-fns';
import { Observable } from 'rxjs';
import { RadioButtonsAndChartComponent } from '../Components/radio-buttons-and-chart/radio-buttons-and-chart.component';
import { PeriodicElementt } from '../content/today-trening/today-trening.component';

export interface IconLink {
  style: string;
  url: string;
}

export interface TitleAndMenu {
  title: string;
  menu: Menu[];
  icon: string | null;
}

export interface Menu {
  title: string;
}

export interface TextBox {
  title: string;
  contents: string[];
}

export interface Guide {
  title: string;
  content: string;
  footerColor: string;
}

export interface CheckboxsAndTitle {
  title: string;
  formGroup: FormGroup;
  buttons: CheckboxButton[];
  additionalData?: GenericParam<string>;
}

export interface GenericParam<T> {
  [name: string]: T;
}

export interface CheckboxButton {
  formControlName: string;
  text: string;
}

export interface BannerData {
  header: string;
  content: string;
  buttonText: string;
}

export interface MatStepProperties {
  formGroup: FormGroup;
  title: string;
  formControlName: string;
}

export interface DecoratedInputsGroup {
  title: string;
  inputs: InputFormField[];
  /*   formControl: FormControl; */
  hasButton?: boolean;
  buttonTitle?: string;
  customDecoration?: string;
  additionalParam?: GenericParam<string>;
}

export interface AutocompleteFormProperties {
  title: string;
  placeholder: string;
  formControlName: string;
  findedOptions: Observable<string[]> | null;
  hasDecoration?: boolean;
}

export interface MatDialogData {
  title: string;
  placeholder: string;
  inputValue: string;
  unit: string;
}

export interface RadioButtonsDialogWithTitle {
  title: string;
  buttons: RadioButtonOption[];
  selectedOption: string;
  dialogData?: MatDialogData;
}

export interface RadioButtonOption {
  title: string;
  hasDialog?: boolean;
}

export interface MatAutocompeteData {
  matLabel: string;
  placeholder: string;
  formControl: FormControl;
  options: string[];
}

export interface InputFormField {
  matLabel: string;
  placeholder: string;
  appereance: MatFormFieldAppearance;
}

export interface DateAndFormat {
  date: Date;
  dateFormat: string;
}

export interface MatTabs {
  labelName: string;
  content: Type<TableWithOpenedGraphsComponent>;
}

export interface TableWithOpenedGraphsComponent {
  dataSource: any;
  columns: string[];
  tableFinder: InputFormField;
  additionalContentForRow: Type<RadioButtonsAndChartComponent>;
  filteredRows$: Observable<PeriodicElementt[]>;
}

export interface MatDividerListData {
  title: string;
  list: string[];
}

export interface Profile {
  imgUrl: string;
  nickname: string;
  assing: string;
}

export interface Options {
  title: string;
  form: OptionsForm;
}

export interface OptionsForm {
  editImageData: EditImage | null;
  textArea: TextArea | null;
  inputs: InputAndTitle | null;
  autocomplete: MatAutocompeteData | null;
  sliders: MatSlider[] | null;
  button: string | null;
}

export interface MatSlider {
  text: string;
}

export interface InputsForm {
  title: string | null;
  inputsData: InputFormField[];
}

export interface EditImage {
  imageAdress: string;
  text: string;
  buttonText: string;
}

export interface TextArea {
  matLabel: string;
  title?: string;
}

export interface BottomSheet {
  name: string;
  title: string;
  date: string;
}

export interface BarAndTable {
  bar: { title: string | null; hasCloseButton: boolean };
  table: { columns: string[]; dataSource: any };
}

export interface InputsFormFields {
  name: string;
  data: InputFormField[];
}

export interface UserPanelData {
  imgAdress: string;
  buttonText: string;
  matIcon: string;
  matTooltipText: string;
}

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

export interface TitleAndAutocomplete {
  title: string;
  autocomplete: MatAutocompeteData;
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
