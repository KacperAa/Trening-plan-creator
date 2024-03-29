import { Component, Input, OnInit } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { MatAutocompleteData } from 'src/app/Interfaces/mat-autocomplete-data.interface';

@Component({
  selector: 'ui-input-autocomplete[data]',
  templateUrl: './input-autocomplete.atom.html',
  styleUrls: ['./input-autocomplete.atom.scss'],
})
export class MatAutocomplateComponent implements OnInit {
  @Input()
  public data!: MatAutocompleteData;
  public keyOptionsFound!: Observable<string[]>;
  public autocomplete!: MatAutocomplete;

  public ngOnInit(): void {
    this.keyOptionsFound = this.data.formControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filterOptionsByKey(value || ''))
    );
  }

  private _filterOptionsByKey(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.data.options.filter((option: string) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
