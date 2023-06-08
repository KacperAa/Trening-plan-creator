import { FormControl } from '@angular/forms';

export interface MatDialogData {
  type?: string;
  title: string;
  placeholder: string;
  formControl: FormControl;
  unit: string;
}
