import { Exercise } from './exercise.interface';

export interface TreningPlan {
  weeks: number;
  daysOfWeeks: string[];
  exercises: Exercise[];
  icons: any;
}
