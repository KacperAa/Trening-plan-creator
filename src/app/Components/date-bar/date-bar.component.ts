import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DateAndFormat } from 'src/app/Interfaces/date-and-format.interface';
import { DialogFormComponent } from 'src/app/UI/molecules/dialog-form/dialog-form.molecule';
import { DialogWithDateFieldComponent } from '../dialog-with-date-field/dialog-with-date-field.component';

@Component({
  selector: 'app-date-bar',
  templateUrl: './date-bar.component.html',
  styleUrls: ['./date-bar.component.scss'],
})
export class DateBarComponent implements OnDestroy {
  public inputValue!: string;
  private _subs: Subscription = new Subscription();

  constructor(private _dialog: MatDialog) {}

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public dateAndFormat: DateAndFormat = {
    date: new Date(),
    dateFormat: 'EEEE dd/MM/y',
  };

  public openDialog(): void {
    const dialogRef = this._dialog.open(DialogWithDateFieldComponent, {
      data: {
        inputValue: this.inputValue,
      },
    });

    this._subs.add(
      dialogRef.afterClosed().subscribe((inputValue) => {
        this.inputValue = inputValue;
        console.log(this.inputValue);
      })
    );
  }
}
