import { InputFormField } from './input-form-field.interface';

export interface DecoratedInputsGroup<T> {
  title: string;
  inputs: InputFormField[];
  hasButton?: boolean;
  buttonTitle?: string;
  customDecoration?: string;
  additionalParam?: T;
}
