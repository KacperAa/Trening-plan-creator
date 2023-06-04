import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface InputFormField {
  matLabel: string;
  placeholder: string;
  appereance: MatFormFieldAppearance;
  inputType?: string;
}
