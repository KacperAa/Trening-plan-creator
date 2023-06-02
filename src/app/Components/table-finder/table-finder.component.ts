import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-table-finder[matLabel][placeholder][appereance]',
  templateUrl: './table-finder.component.html',
  styleUrls: ['./table-finder.component.scss'],
})
export class TableFinderComponent {
  @Input()
  public matLabel!: string;
  @Input()
  public placeholder!: string;
  @Input()
  public appereance!: MatFormFieldAppearance;
  @Output()
  public emitInputValue: EventEmitter<string> = new EventEmitter<string>();
}
