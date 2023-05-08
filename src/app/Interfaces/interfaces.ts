import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Observable } from 'rxjs';

export interface SocialMediaIconAndAdress {
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

export interface HomePagePromo {
  title: string;
  contents: string[];
}

export interface Guide {
  title: string;
  content: string;
  footerColor: string;
}

export interface CheckboxData {
  formGroup: FormGroup;
  title: string;
  button: TextAndFormControlName[];
}

export interface TextAndFormControlName {
  formControlName: string;
  text: string;
}

export interface HeaderAndText {
  header: string;
  content: string;
}

export interface TreningListTree {
  name: string;
  icon?: string;
  children?: TreningListTree[];
}

export interface BranchTreningTree {
  isExpandable: boolean;
  name: string;
  level: number;
}

export interface MatStepProperties {
  formGroup: FormGroup;
  title: string;
  formControlName: string;
}

export interface InputParams {
  label: string;
  isSmallInput: boolean;
}

export interface InputsFormField {
  title: string;
  appereance: MatFormFieldAppearance;
  inputs: InputInField[];
  placeholder: string;
  isOpen: boolean;
  hasButton?: boolean;
  buttonTitle?: string;
  partingDecoration?: string;
}

export interface InputInField {
  text: string;
  hasDecoration: boolean;
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

export interface RadioButtonsData {
  title: string;
  buttons: RadioButtonOption[];
  selectedOption: string;
  dialogData?: MatDialogData;
}

export interface RadioButtonOption {
  title: string;
  hasDialog: boolean;
}

export interface MatAutocompeteData {
  matLabel: string;
  placeholder: string;
  formControl: FormControl;
  options: string[];
  title: string | null;
}

export interface InputFormField {
  matLabel: string;
  placeholder: string;
  appereance: MatFormFieldAppearance;
  title: string | null;
}

export interface BarAndDataField {
  date: Date;
  dateFormat: string;
  icon: string;
  dateField: DateField;
}

export interface DateField {
  text: string;
  matLabel: string;
  inputAppereance: MatFormFieldAppearance;
}

export interface MatTabs {
  labelName: string;
  content: any;
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
  inputs: InputsForm | null;
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
