import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatDialogData } from 'src/app/Interfaces/mat-dialog-data.interface';
import { FormsErrorsService } from 'src/app/Services/forms-errors.service';

@Component({
  selector: 'ui-dialog-form',
  templateUrl: './dialog-form.molecule.html',
  styleUrls: ['./dialog-form.molecule.scss'],
})
export class DialogFormComponent implements OnInit, OnDestroy {
  private _subs: Subscription = new Subscription();
  constructor(
    private _errorService: FormsErrorsService,
    private _dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogData
  ) {}

  public ngOnInit(): void {
    this._trackFormStatus();
  }

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public closeDialog(): void {
    this.data.formControl.markAsTouched();
    this._dialogRef.close();
  }

  public getErrorMessage(): string {
    return this._errorService.setErrorMessage(this.data.formControl);
  }

  private _trackFormStatus(): void {
    this._subs.add(
      this.data.formControl.statusChanges.subscribe(() => {
        this._markInputAsTouched();
      })
    );
  }

  private _markInputAsTouched(): void {
    this.data.formControl.invalid
      ? this.data.formControl.markAsTouched()
      : null;
  }
}
