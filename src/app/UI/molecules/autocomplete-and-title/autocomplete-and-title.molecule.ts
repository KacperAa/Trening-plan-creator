import { Component, Input } from '@angular/core';
import { MatAutocompeteData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-autocomplete-and-title[data]',
  templateUrl: './autocomplete-and-title.molecule.html',
  styleUrls: ['./autocomplete-and-title.molecule.scss'],
})
export class AutocompleteAndTitleComponent {
  @Input()
  public data!: MatAutocompeteData;
}
