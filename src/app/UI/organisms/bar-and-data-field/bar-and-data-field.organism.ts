import { Component, Input } from '@angular/core';
import { BarAndDataField } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-bar-and-data-field[barAndDateFieldData]',
  templateUrl: './bar-and-data-field.organism.html',
  styleUrls: ['./bar-and-data-field.organism.scss'],
})
export class TableBarComponent {
  @Input()
  public barAndDateFieldData!: BarAndDataField;
  public isOpenCalendarField: boolean = false;
  public animationState: string = 'closed';

  public openDateField(): void {
    setTimeout(() => {
      this.animationState = this.animationState === 'open' ? 'closed' : 'open';
    }, 0);
    this.isOpenCalendarField = !this.isOpenCalendarField;
  }
}
