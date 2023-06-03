import { FormControl } from '@angular/forms';

export interface MatAutocompleteData {
  matLabel: string;
  placeholder: string;
  formControl: FormControl;
  options: string[];
}
