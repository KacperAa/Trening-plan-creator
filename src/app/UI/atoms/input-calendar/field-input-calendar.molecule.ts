import { Component, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { openField } from 'src/app/Animations/own-animations';

@Component({
  selector:
    'ui-field-input-calendar[title][animationState][matLabel][inputAppereance]',
  templateUrl: './field-input-calendar.molecule.html',
  styleUrls: ['./field-input-calendar.molecule.scss'],
  animations: [openField],
})
export class InputCalendarComponent {
  @Input()
  public title!: string;
  @Input()
  public animationState!: string;
  @Input()
  public matLabel!: string;
  @Input()
  public inputAppereance!: MatFormFieldAppearance;
}
