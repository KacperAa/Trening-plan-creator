import { FormBase } from '../Classes/form-base';
import { Direction } from '../Types/directions';

export interface ControlsDirection {
  direction: Direction;
  controls: FormBase<string>[];
  order: number;
}
