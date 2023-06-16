import { FormGroup } from '@angular/forms';
import { InputTitleIcon } from './input-title-icon.interface';
import { TitleAndAutocomplete } from './title-and-autocomplete.interface';

export interface InputAndAutocompletesSwitcher {
  inputAndTitle: InputTitleIcon;
  titlesAndAutocompletes: TitleAndAutocomplete[];
}
