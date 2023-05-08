import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';

@Component({
  selector: 'ui-title-and-chips[title]',
  templateUrl: './title-and-chips.molecule.html',
  styleUrls: ['./title-and-chips.molecule.scss'],
})
export class TitleAndChipsComponent {
  @Input()
  public title!: string;
  @Output()
  public chipChange = new EventEmitter<MatChipListboxChange>();
}
