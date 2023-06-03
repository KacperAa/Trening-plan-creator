import { Observable } from 'rxjs';
import { RadioButtonsAndChartComponent } from '../Components/radio-buttons-and-chart/radio-buttons-and-chart.component';
import { InputFormField } from './input-form-field.interface';
import { PeriodicElementt } from '../content/today-trening/today-trening.component';
import { Type } from '@angular/core';

export interface TableWithOpenedGraphsComponent {
  dataSource: any;
  columns: string[];
  tableFinder: InputFormField;
  additionalContentForRow: Type<RadioButtonsAndChartComponent>;
  filteredRows$: Observable<PeriodicElementt[]>;
}
