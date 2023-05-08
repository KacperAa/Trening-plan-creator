import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modifiable-table',
  templateUrl: './modifiable-table.component.html',
  styleUrls: ['./modifiable-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('closed', style({ height: '0px', minHeight: '0' })),
      state('open', style({ height: '*' })),
      transition(
        'open <=> closed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ModifiableTableComponent {
  public columnsToDisplay: string[] = ['Ex', 'Series', 'Reps', 'Rpe'];

  dataSource = ELEMENT_DATA;

  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElementt | null;
}
export interface PeriodicElementt {
  ex: string;
  series: number;
  reps: number;
  rpe: number;
  icon: string;
}

const ELEMENT_DATA: PeriodicElementt[] = [
  { ex: 'Bench Press', series: 3, reps: 12, rpe: 8, icon: 'create' },
  { ex: 'Front Squad', series: 3, reps: 12, rpe: 9, icon: 'create' },
  { ex: 'Bench Press', series: 3, reps: 12, rpe: 8, icon: 'create' },
  { ex: 'Front Squad', series: 3, reps: 12, rpe: 9, icon: 'create' },
  { ex: 'Bench Press', series: 3, reps: 12, rpe: 8, icon: 'create' },
  { ex: 'Front Squad', series: 3, reps: 12, rpe: 9, icon: 'create' },
];
