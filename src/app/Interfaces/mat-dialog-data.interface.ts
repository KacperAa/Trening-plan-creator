import { FormControl } from '@angular/forms';

export interface MatDialogData {
  title: string;
  placeholder: string;
  formControl: FormControl;
  unit: string;
}
