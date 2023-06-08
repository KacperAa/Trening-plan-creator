import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogFormComponent } from 'src/app/UI/molecules/dialog-form/dialog-form.molecule';
import { TableRowAndCellKey } from 'src/app/Interfaces/table-row-and-cell-key.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ExerciseParams {
  ex: string;
  series: number;
  reps: number;
  rpe: number;
  icons: any;
  dialogData?: any;
}

const ELEMENT_DATA: ExerciseParams[] = [
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [{ column: 'Delete', icon: 'delete' }],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [{ column: 'Delete', icon: 'delete' }],
  },
];

@Component({
  selector: 'app-trening-day[dayOfWeek]',
  templateUrl: './trening-day.component.html',
  styleUrls: ['./trening-day.component.scss'],
})
export class TreningDayComponent {
  @Input()
  public dayOfWeek!: string;
  @Output()
  public emitOpen = new EventEmitter<never>();
  public dataSource = ELEMENT_DATA;
  public tableColumns: string[] = ['Ex', 'Series', 'Reps', 'RPE', 'Delete'];
  public inputValue!: string;
  public rowAndCellKey!: TableRowAndCellKey;

  private _subs: Subscription = new Subscription();

  constructor(private _dialog: MatDialog) {}

  public captureCellValue(cellValue: string | number) {
    /*  if (typeof cellValue === 'string') {
    } */

    this._openDialog(cellValue);
  }

  public captureRowAndCellKey(rowAndCellKey: TableRowAndCellKey): void {
    this.rowAndCellKey = rowAndCellKey;
    /*     this._openDialog(); */
  }

  private _openDialog(cellValue: string | number): void {
    let formControl: FormControl = new FormControl(
      this.rowAndCellKey.row[this.rowAndCellKey.cellKey],
      [Validators.required]
    );
    if (typeof cellValue === 'string') {
      formControl.addValidators(Validators.pattern(/^[a-zA-Z ]+$/));
    } else {
      formControl.addValidators(Validators.pattern(/^[0-9]+$/));
    }

    const dialogRef = this._dialog.open(DialogFormComponent, {
      disableClose: true,
      data: {
        placeholder: '...',
        formControl: formControl,
        unit: this.rowAndCellKey.cellKey,
      },
    });

    this._subs.add(
      dialogRef.afterClosed().subscribe((inputValue) => {
        this.rowAndCellKey.row[this.rowAndCellKey.cellKey] = inputValue;
      })
    );
  }
}
