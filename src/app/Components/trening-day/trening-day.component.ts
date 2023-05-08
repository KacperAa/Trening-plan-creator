import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRow, MatTable } from '@angular/material/table';

export interface ExerciseParams {
  ex: string;
  series: number;
  reps: number;
  rpe: number;
  icons: any;
}

const ELEMENT_DATA: ExerciseParams[] = [
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [
      { column: 'Delete', icon: 'delete' },
      { column: 'Edit', icon: 'create' },
    ],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [
      { column: 'Delete', icon: 'delete' },
      { column: 'Edit', icon: 'create' },
    ],
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
  public emitEvent = new EventEmitter<never>();
  public dataSource = ELEMENT_DATA;
  public editableRowData: MatRow[] = [];
  public editTableRef!: MatTable<ExerciseParams>;
  public isOpenedEditTable: boolean = false;
  public tableColumns: string[] = [
    'Ex',
    'Series',
    'Reps',
    'RPE',
    'Edit',
    'Delete',
  ];
  public editableColumns: string[] = ['Ex', 'Series', 'Reps', 'RPE', 'Close'];

  public emitAddExButtonEvent(): void {
    return this.emitEvent.emit();
  }

  public captureTableReference(tableRef: MatTable<ExerciseParams>): void {
    this.editTableRef = tableRef;
  }

  public openEditRow(row: MatRow): void {
    this.isOpenedEditTable = true;
    this.editableRowData[0] = row;
    this._refreshEditTableView();
  }

  public closeEditRow(): void {
    this.isOpenedEditTable = false;
  }

  private _refreshEditTableView(): void {
    setTimeout(() => {
      this.editTableRef.renderRows();
    }, 0);
  }
}
