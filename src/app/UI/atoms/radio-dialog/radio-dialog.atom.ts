import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../molecules/dialog-form/dialog-form.molecule';
import { RadioButtonOption } from 'src/app/Interfaces/radio-button-option.interface';
import { Subscription } from 'rxjs';
import { MatDialogData } from 'src/app/Interfaces/mat-dialog-data.interface';

@Component({
  selector: 'ui-radio-dialog[button][dialogData][selectedOption]',
  templateUrl: './radio-dialog.atom.html',
  styleUrls: ['./radio-dialog.atom.scss'],
})
export class RadioDialogComponent implements OnDestroy {
  @Input()
  public button!: RadioButtonOption;
  @Input()
  public dialogData: MatDialogData | undefined;
  @Input()
  public selectedOption!: string;
  public dialogInputValue: string = '';
  private _subs: Subscription = new Subscription();

  constructor(private _dialog: MatDialog) {}

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public checkIsSelected(): boolean {
    //Method checks if the field is checked by default
    return this.selectedOption === this.button.title;
  }

  public openDialog(): void {
    const dialogRef = this._dialog.open(DialogFormComponent, {
      data: {
        title: this.dialogData?.title,
        placeholder: this.dialogData?.placeholder,
        inputValue: this.dialogInputValue,
        unit: this.dialogData?.unit,
      },
    });

    this._subs.add(
      dialogRef.afterClosed().subscribe((inputValue) => {
        this.dialogInputValue = inputValue;
      })
    );
  }
}

/* komponent do przemyslenia z Erykiem */
