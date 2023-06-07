import { Component, Input, OnDestroy } from '@angular/core';
import { RadioButtonsDialogWithTitle } from 'src/app/Interfaces/radio-buttons-dialog-with-title.interace';
import { DialogFormComponent } from '../dialog-form/dialog-form.molecule';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonOption } from 'src/app/Interfaces/radio-button-option.interface';

@Component({
  selector: 'ui-title-and-radio-button[data]',
  templateUrl: './title-and-radio-button.molecule.html',
  styleUrls: ['./title-and-radio-button.molecule.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TitleAndRadioButtonComponent,
      multi: true,
    },
  ],
})
export class TitleAndRadioButtonComponent
  implements OnDestroy, ControlValueAccessor
{
  @Input()
  public data!: RadioButtonsDialogWithTitle;
  @Input()
  public dialogInputValue: string = '';
  public value!: string;
  public onChange!: (value: string) => void;
  public onTouched!: () => void;

  private _subs: Subscription = new Subscription();

  constructor(private _dialog: MatDialog) {}

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
  public writeValue(obj: string): void {
    this.value = obj;
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setValue(value: string): void {
    this.onChange(value);
    this.onTouched();
  }

  public openDialog(button: RadioButtonOption): void {
    const dialogRef = this._dialog.open(DialogFormComponent, {
      disableClose: true,
      data: {
        title: button.dialogData?.title,
        placeholder: button.dialogData?.placeholder,
        formControl: button.dialogData?.formControl,
        unit: button.dialogData?.unit,
      },
    });

    this._subs.add(
      dialogRef.afterClosed().subscribe((inputValue) => {
        this.dialogInputValue = inputValue;
        console.log(inputValue);
      })
    );
  }
}
