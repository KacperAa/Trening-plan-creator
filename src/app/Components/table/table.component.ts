import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { MatRow } from '@angular/material/table';
import { detailExpand } from 'src/app/Animations/own-animations';
import { TableRowAndCellKey } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-table[columns][dataSource]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [detailExpand],
})
export class TableComponent {
  @Input()
  public columns!: string[];
  @Input()
  public dataSource: any; /* po stworzeniu daty zmienic type */
  @Input()
  public isClicableRows!: boolean;
  @Input()
  public isClicableParams!: boolean;
  @Input()
  set componentForClicableRows(component: Type<Component | any>) {
    this.dynamicComponent = component;
  }
  @Output()
  public expendedRow!: MatRow | null; /* moze sie przydac pozniej */
  @Output()
  public tableRowAndCellLocation: EventEmitter<TableRowAndCellKey> =
    new EventEmitter<TableRowAndCellKey>();
  public dynamicComponent!: Type<Component>;

  public columnHasIcon(
    column: string,
    icon: any /* po stworzeniu daty zmienic type */
  ): boolean {
    return column === icon.column;
  }

  public expandRow(row: MatRow): MatRow | null {
    return (this.expendedRow = this.expendedRow === row ? null : row);
  }

  public getAnimationState(row: MatRow): string {
    return row === this.expendedRow ? 'expanded' : 'collapsed';
  }

  public emitTableRowAndCellLocation(row: MatRow, column: string): void {
    this.tableRowAndCellLocation.emit(this._findClickedCell(row, column));
  }

  public displayCellValue(row: MatRow | any, column: string): string {
    const key = column.toLowerCase();
    return row[key];
  }

  private _findClickedCell(row: MatRow, column: string): TableRowAndCellKey {
    const cellKey = column.toLowerCase();
    const cellLocation = { row: row, cellKey: cellKey };
    return cellLocation;
  }
}
