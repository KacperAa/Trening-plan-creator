import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogData } from 'src/app/Interfaces/mat-dialog-data.interface';

@Component({
  selector: 'app-dialog-with-date-field',
  templateUrl: './dialog-with-date-field.component.html',
  styleUrls: ['./dialog-with-date-field.component.scss'],
})
export class DialogWithDateFieldComponent {
  constructor(
    private _dialogRef: MatDialogRef<DialogWithDateFieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogData
  ) {}

  public closeDialog(): void {
    this._dialogRef.close();
  }
}
