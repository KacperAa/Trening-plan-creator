import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BarAndTable } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-table-and-bar[tableAndBarData]',
  templateUrl: './table-and-bar.component.html',
  styleUrls: ['./table-and-bar.component.scss'],
})
export class TableAndBarComponent {
  @Input()
  public tableAndBarData!: BarAndTable;

  @Output()
  public emitClick: EventEmitter<never> = new EventEmitter<never>();

  constructor() {}
}
