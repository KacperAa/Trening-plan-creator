import { FormGroup } from '@angular/forms';

export interface MatStepProperties {
  formGroup: FormGroup;
  title: string;
  formControlName: string;
}
