import { FormControl } from '@angular/forms';
import { MatDialogData } from './mat-dialog-data.interface';

export interface RadioButtonOption {
  title: string;
  hasDialog?: boolean;
  dialogData?: MatDialogData;
}
