import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarData } from 'src/app/Interfaces/bar-data.interface';

@Component({
  selector: 'app-table-and-bar[barData]',
  templateUrl: './table-and-bar.component.html',
  styleUrls: ['./table-and-bar.component.scss'],
})
export class TableAndBarComponent {
  @Input()
  public barData!: BarData;
  @Output()
  public emitClick: EventEmitter<never> = new EventEmitter<never>();
}
