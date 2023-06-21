import { FormGroup } from '@angular/forms';
import { InputFormField } from './input-form-field.interface';

export interface MatStepProperties {
  title: string;
  inputsData: InputFormField[];
  formGroup: FormGroup;
}
