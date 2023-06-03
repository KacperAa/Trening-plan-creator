import { GenericParam } from './checkboxs-and-title.interface';
import { InputFormField } from './input-form-field.interface';

export interface DecoratedInputsGroup {
  title: string;
  inputs: InputFormField[];
  /*   formControl: FormControl; */
  hasButton?: boolean;
  buttonTitle?: string;
  customDecoration?: string;
  additionalParam?: GenericParam<string>;
}
