import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCell, MatRow } from '@angular/material/table';
import { detailExpand } from 'src/app/Animations/own-animations';
import { RadioButtonsData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-table[columns][dataSource][isClicableRows]',
  templateUrl: './table.template.html',
  styleUrls: ['./table.template.scss'],
  animations: [detailExpand],
})
export class TableComponent {
  @Input()
  public columns!: string[];
  @Input()
  public dataSource: any;
  @Input()
  public isClicableRows!: boolean;
  @Input()
  public radioButtonsData!: RadioButtonsData;

  @Output()
  public emitRow: EventEmitter<MatRow> = new EventEmitter<MatRow>();
  public expendedRow: any | null;

  public expandRow(row: MatRow): MatRow | null {
    return (this.expendedRow = this.expendedRow === row ? null : row);
  }

  public getAnimationState(element: MatCell): string {
    return element === this.expendedRow ? 'expanded' : 'collapsed';
  }
}
