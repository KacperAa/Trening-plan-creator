import { FormBase } from '../Classes/form-base';
import { Direction } from '../Types/directions';

export interface ControlsDirection<T> {
  direction: Direction;
  controls: FormBase<T>[];
  order: number;
}
