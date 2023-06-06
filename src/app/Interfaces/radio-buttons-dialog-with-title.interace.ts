import { MatDialogData } from './mat-dialog-data.interface';
import { RadioButtonOption } from './radio-button-option.interface';

export interface RadioButtonsDialogWithTitle {
  title: string;
  buttons: RadioButtonOption[];

  dialogData?: MatDialogData;
}
