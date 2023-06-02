import { Component, Input } from '@angular/core';
import { TitleAndAutocomplete } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-title-and-autocomplete[data]',
  templateUrl: './title-and-autocomplete.molecule.html',
  styleUrls: ['./title-and-autocomplete.molecule.scss'],
})
export class TitleAndAutocompleteComponent {
  @Input()
  public data!: TitleAndAutocomplete;
}
