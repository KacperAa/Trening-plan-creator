import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { ChipsWithTitle } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-title-and-chips[data]',
  templateUrl: './title-and-chips.molecule.html',
  styleUrls: ['./title-and-chips.molecule.scss'],
})
export class TitleAndChipsComponent {
  @Input()
  public data!: ChipsWithTitle;
  @Output()
  public chipChange = new EventEmitter<MatChipListboxChange>();
}
