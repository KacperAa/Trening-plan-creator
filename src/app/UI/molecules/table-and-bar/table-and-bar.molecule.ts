import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarAndTable } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-table-and-bar[tableAndBarData]',
  templateUrl: './table-and-bar.molecule.html',
  styleUrls: ['./table-and-bar.molecule.scss'],
})
export class TableAndBarComponent {
  @Input()
  public tableAndBarData!: BarAndTable;
  @Output()
  public emitClick: EventEmitter<never> = new EventEmitter<never>();
}
