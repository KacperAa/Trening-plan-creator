import { Component, Input } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { MatAutocompleteData } from 'src/app/Interfaces/mat-autocomplete-data.interface';
import { TitleAndAutocomplete } from 'src/app/Interfaces/title-and-autocomplete.interface';

type Position = 'vertical' | 'horizontal';

@Component({
  selector: 'ui-title-and-autocomplete[data]',
  templateUrl: './title-and-autocomplete.molecule.html',
  styleUrls: ['./title-and-autocomplete.molecule.scss'],
})
export class TitleAndAutocompleteComponent {
  @Input()
  public data!: TitleAndAutocomplete;
  @Input()
  public position: Position = 'horizontal';
  public keyOptionsFound!: Observable<string[]>;

  public get autocompleteData(): MatAutocompleteData {
    return this.data.autocomplete;
  }

  public ngOnInit(): void {
    this.keyOptionsFound = this.autocompleteData.formControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filterOptionsByKey(value || ''))
    );
  }

  private _filterOptionsByKey(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autocompleteData.options.filter((option: string) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
