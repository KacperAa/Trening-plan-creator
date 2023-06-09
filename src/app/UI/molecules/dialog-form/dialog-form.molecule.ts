import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatDialogData } from 'src/app/Interfaces/mat-dialog-data.interface';

@Component({
  selector: 'ui-dialog-form',
  templateUrl: './dialog-form.molecule.html',
  styleUrls: ['./dialog-form.molecule.scss'],
})
export class DialogFormComponent implements OnInit, OnDestroy {
  private _subs: Subscription = new Subscription();
  constructor(
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
    if (this.data.formControl.hasError('required')) {
      return 'The field is required!';
    }
    if (this.data.formControl.hasError('pattern')) {
      const patternError = this.data.formControl.getError('pattern');
      return patternError.requiredPattern === '/^[0-9]+$/'
        ? 'Only numbers can be entered'
        : 'Only letters can be entered';
    }
    return '';
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
