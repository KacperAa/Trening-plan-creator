import { GenericParam } from './checkboxs-and-title.interface';
import { InputFormField } from './input-form-field.interface';

export interface InputAndTitle {
  title: string;
  inputData: InputFormField;
  additionalParam?: GenericParam<string>;
}
