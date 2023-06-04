import { FormGroup } from '@angular/forms';
import { CheckboxButton } from './checkbox-button.interface';

export interface CheckboxsAndTitle<T> {
  title: string;
  formGroup: FormGroup;
  buttons: CheckboxButton[];
  additionalData?: T;
}
