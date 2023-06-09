import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonsDialogWithTitle } from 'src/app/Interfaces/radio-buttons-dialog-with-title.interace';

@Component({
  selector: 'app-value-accesor',
  templateUrl: './value-accesor.component.html',
  styleUrls: ['./value-accesor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ValueAccesorComponent,
      multi: true,
    },
  ],
})
export class ValueAccesorComponent implements ControlValueAccessor {
  @Input()
  public data!: RadioButtonsDialogWithTitle;
  public value!: string;
  public onChange!: (value: string) => void;
  public onTouched!: () => void;

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
}
