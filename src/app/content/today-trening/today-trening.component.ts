import { Component, Type } from '@angular/core';
import { ExercisePerformedComponent } from 'src/app/Components/actual-plan/exercise-performed.component';

@Component({
  selector: 'app-today-trening',
  templateUrl: './today-trening.component.html',
  styleUrls: ['./today-trening.component.scss'],
})
export class TodayTreningComponent {
  public columns: string[] = ['Ex', 'Series', 'Reps', 'Rpe', 'Edit'];

  public dataSource: PeriodicElementt[] = ELEMENT_DATA;
  public passedComponent: Type<ExercisePerformedComponent> =
    ExercisePerformedComponent;
}

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
    icons: [{ column: 'Edit', icon: 'create' }],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [{ column: 'Edit', icon: 'create' }],
  },
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [{ column: 'Edit', icon: 'create' }],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [{ column: 'Edit', icon: 'create' }],
  },
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [{ column: 'Edit', icon: 'create' }],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [{ column: 'Edit', icon: 'create' }],
  },
];
