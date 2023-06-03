import { Component, OnInit, Type } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ColumnAndText,
  InputFormField,
  TableWithOpenedGraphsComponent,
} from 'src/app/Interfaces/interfaces';
import { PeriodicElementt } from 'src/app/content/today-trening/today-trening.component';
import { RadioButtonsAndChartComponent } from '../radio-buttons-and-chart/radio-buttons-and-chart.component';

@Component({
  selector: 'app-table-with-search',
  templateUrl: './table-with-search.component.html',
  styleUrls: ['./table-with-search.component.scss'],
})
export class TableWithSearchComponent
  implements OnInit, TableWithOpenedGraphsComponent
{
  public dataSource: PeriodicElementt[] = ELEMENT_DATA;
  public columns: string[] = ['ex', 'series', 'RPE'];

  public tableFinder: InputFormField = {
    matLabel: 'find exercise',
    placeholder: '...',
    appereance: 'fill',
  };
  public additionalContentForRow: Type<RadioButtonsAndChartComponent> =
    RadioButtonsAndChartComponent;
  public filteredRows$!: Observable<PeriodicElementt[]>;

  public ngOnInit(): void {
    this.filteredRows$ = of(this.dataSource);
  }

  public findRowsByKey(inputValue: string): void {
    this.filteredRows$ = of(this._filterDataSource(inputValue));
  }

  private _filterDataSource(value: string): PeriodicElementt[] {
    const valueToLowerCase = value.toLowerCase();

    return this.dataSource.filter((element) =>
      element.ex.toLowerCase().includes(valueToLowerCase)
    );
  }
}
/* dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */

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
