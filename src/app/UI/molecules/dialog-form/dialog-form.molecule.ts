import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogData } from 'src/app/Interfaces/mat-dialog-data.interface';

@Component({
  selector: 'ui-dialog-form',
  templateUrl: './dialog-form.molecule.html',
  styleUrls: ['./dialog-form.molecule.scss'],
})
export class DialogFormComponent {
  constructor(
    private _dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogData
  ) {}

  public closeDialog(): void {
    this._dialogRef.close();
  }
}
