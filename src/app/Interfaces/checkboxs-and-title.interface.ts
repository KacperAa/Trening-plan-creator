import { FormGroup } from '@angular/forms';
import { CheckboxButton } from './checkbox-button.interface';

export interface CheckboxsAndTitle {
  title: string;
  formGroup: FormGroup;
  buttons: CheckboxButton[];
}
