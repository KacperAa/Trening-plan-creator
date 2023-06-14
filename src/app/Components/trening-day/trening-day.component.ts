import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogFormComponent } from 'src/app/UI/molecules/dialog-form/dialog-form.molecule';
import { TableRowAndCellKey } from 'src/app/Interfaces/table-row-and-cell-key.interface';
import { FormControl, Validators } from '@angular/forms';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-trening-day[dayOfWeek]',
  templateUrl: './trening-day.component.html',
  styleUrls: ['./trening-day.component.scss'],
})
export class TreningDayComponent implements OnDestroy {
  @Input()
  public dayOfWeek!: string;
  @Output()
  public emitOpen = new EventEmitter<never>();
  public dataSource = ELEMENT_DATA;
  public tableColumns: string[] = ['Ex', 'Series', 'Reps', 'RPE', 'Delete'];
  public inputValue!: string;
  public rowAndCellKey!: TableRowAndCellKey;
  private _scrollStrategy: ScrollStrategy =
    this._scrollStrategyOptions.reposition();
  private _subs: Subscription = new Subscription();

  constructor(
    private _dialog: MatDialog,
    private _scrollStrategyOptions: ScrollStrategyOptions
  ) {}
  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public captureCellValue(cellValue: string | number) {
    this._openDialog(cellValue);
  }

  public captureRowAndCellKey(rowAndCellKey: TableRowAndCellKey): void {
    this.rowAndCellKey = rowAndCellKey;
  }

  private _openDialog(cellValue: string | number): void {
    const dialogRef = this._dialog.open(DialogFormComponent, {
      disableClose: true,
      maxWidth: 280,
      scrollStrategy: this._scrollStrategy,
      data: {
        placeholder: '...',
        formControl: this._setValidator(cellValue),
        unit: this.rowAndCellKey.cellKey,
      },
    });

    this._subs.add(
      /*  take on destroy */
      dialogRef.afterClosed().subscribe((inputValue) => {
        if (inputValue)
          this._convertAndAssignDialogValue(cellValue, inputValue);
      })
    );
  }

  private _convertAndAssignDialogValue(
    cellValue: string | number,
    inputValue: string | number
  ) {
    if (typeof cellValue === 'number') {
      this.rowAndCellKey.row[this.rowAndCellKey.cellKey] = Number(inputValue);
    } else if (typeof cellValue === 'string') {
      this.rowAndCellKey.row[this.rowAndCellKey.cellKey] = String(inputValue);
    }
  }

  private _setValidator(cellValue: string | number): FormControl {
    const formControl: FormControl = new FormControl(cellValue, [
      Validators.required,
    ]);
    if (typeof cellValue === 'string') {
      formControl.addValidators(Validators.pattern(/^[a-zA-Z ]+$/));
    } else if (typeof cellValue === 'number') {
      formControl.addValidators(Validators.pattern(/^[0-9]+$/));
    }
    return formControl;
  }
}

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
