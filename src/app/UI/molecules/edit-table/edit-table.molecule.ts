import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'ui-edit-table[dataSource][columns]',
  templateUrl: './edit-table.molecule.html',
  styleUrls: ['./edit-table.molecule.scss'],
})
export class EditTableComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @Input()
  public dataSource: any;
  @Input()
  public columns: string[] = [];
  @Output()
  public tableRef: EventEmitter<MatTable<any>> = new EventEmitter<
    MatTable<any>
  >();
  @Output()
  public emitCloseButtonEvent: EventEmitter<never> = new EventEmitter<never>();

  public ngAfterViewInit(): void {
    this.tableRef.emit(this.table);
  }
}
