import { Type } from '@angular/core';
import { TableWithOpenedGraphsComponent } from './table-with-opened-graphs-component.interface';

export interface MatTabs {
  labelName: string;
  content: Type<TableWithOpenedGraphsComponent>;
}
