import { Component } from '@angular/core';
import { BarAndDataField } from 'src/app/Interfaces/interfaces';

export interface PeriodicElementt {
  ex: string;
  series: number;
  reps: number;
  rpe: number;
  icons: any;
}

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
  selector: 'app-today-trening',
  templateUrl: './today-trening.component.html',
  styleUrls: ['./today-trening.component.scss'],
})
export class TodayTreningComponent {
  public isCreated: boolean = true;
  public columns: string[] = ['Ex', 'Series', 'Reps', 'Rpe', 'Create'];
  public dataSource: PeriodicElementt[] = ELEMENT_DATA;

  public barAndDateFieldData: BarAndDataField = {
    date: new Date(),
    dateFormat: 'EEEE dd/MM/y',
    icon: 'date_range',
    dateField: {
      text: 'If you dont have time today...',
      matLabel: 'Choose Day',
      inputAppereance: 'outline',
    },
  };
}
