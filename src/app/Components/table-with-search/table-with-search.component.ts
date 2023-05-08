import { Component, OnInit } from '@angular/core';
import { MatRow } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import {
  InputFormField,
  RadioButtonsData,
} from 'src/app/Interfaces/interfaces';
import { PeriodicElementt } from 'src/app/content/today-trening/today-trening.component';

const ELEMENT_DATA: PeriodicElementt[] = [
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [{ column: 'Create', icon: 'create' }],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [{ column: 'Create', icon: 'create' }],
  },
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [{ column: 'Create', icon: 'create' }],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [{ column: 'Create', icon: 'create' }],
  },
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [{ column: 'Create', icon: 'create' }],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [{ column: 'Create', icon: 'create' }],
  },
];

@Component({
  selector: 'app-table-with-search',
  templateUrl: './table-with-search.component.html',
  styleUrls: ['./table-with-search.component.scss'],
})
export class TableWithSearchComponent implements OnInit {
  public dataSource: PeriodicElementt[] = ELEMENT_DATA;
  public columns: string[] = ['ex', 'series', 'RpE'];
  public inputFieldData: InputFormField = {
    title: null,
    matLabel: 'find ex',
    placeholder: '...',
    appereance: 'fill',
  };
  public radioButtonsData: RadioButtonsData = {
    title: 'choose',
    buttons: [
      { title: '1RM', hasDialog: false },
      { title: 'PWS', hasDialog: false },
    ],
    selectedOption: '1RM',
  };
  public filteredRows$!: Observable<PeriodicElementt[]>;

  public ngOnInit(): void {
    this.filteredRows$ = of(this.dataSource);
  }

  public findRowsByKey(inputValue: string): void {
    this.filteredRows$ = of(this._filterDataSource(inputValue));
  }

  public openChosenRow(row: MatRow): void {
    console.log(row);
  }

  private _filterDataSource(value: string): PeriodicElementt[] {
    const valueToLowerCase = value.toLowerCase();

    return this.dataSource.filter((element) =>
      element.ex.toLowerCase().includes(valueToLowerCase)
    );
  }
}
