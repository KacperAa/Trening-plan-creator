import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../molecules/dialog-form/dialog-form.molecule';
import {
  MatDialogData,
  RadioButtonOption,
} from 'src/app/Interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-mat-radio-button[button][dialogData]',
  templateUrl: './mat-radio-button.atom.html',
  styleUrls: ['./mat-radio-button.atom.scss'],
})
export class MatRadioButtonComponent implements OnDestroy {
  @Input()
  public button!: RadioButtonOption;
  @Input()
  public dialogData: MatDialogData | undefined;
  @Input()
  public selectedOption!: string;
  public matDialogInputValue: string = '';
  private _subs: Subscription = new Subscription();

  constructor(public dialog: MatDialog) {}

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public checkIsSelected(): boolean {
    //Method checks if the field is checked by default
    return this.selectedOption === this.button.title;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      data: {
        title: this.dialogData?.title,
        placeholder: this.dialogData?.placeholder,
        inputValue: this.matDialogInputValue,
        unit: this.dialogData?.unit,
      },
    });

    this._subs.add(
      dialogRef.afterClosed().subscribe((inputValue) => {
        this.matDialogInputValue = inputValue;
      })
    );
  }
}
