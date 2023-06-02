import { Component, Input } from '@angular/core';
import { TextArea } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-textarea-and-title[data]',
  templateUrl: './textarea-and-title.component.html',
  styleUrls: ['./textarea-and-title.component.scss'],
})
export class TextareaAndTitleComponent {
  @Input()
  public data?: TextArea | null;
}
