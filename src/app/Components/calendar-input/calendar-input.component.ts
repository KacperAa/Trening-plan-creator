import { Component, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { openField } from 'src/app/Animations/own-animations';

@Component({
  selector:
    'app-calendar-input[title][animationState][matLabel][inputAppereance]',
  templateUrl: './calendar-input.component.html',
  styleUrls: ['./calendar-input.component.scss'],
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
