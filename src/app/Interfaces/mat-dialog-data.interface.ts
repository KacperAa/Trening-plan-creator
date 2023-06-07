import { FormControl } from '@angular/forms';

export interface MatDialogData {
  title: string;
  placeholder: string;
  inputValue: FormControl;
  unit: string;
}
