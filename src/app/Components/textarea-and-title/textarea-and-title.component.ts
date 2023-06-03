import { Component, Input } from '@angular/core';
import { TitleAndTextArea } from 'src/app/Interfaces/title-and-text-area.interface';

@Component({
  selector: 'ui-textarea-and-title[data]',
  templateUrl: './textarea-and-title.component.html',
  styleUrls: ['./textarea-and-title.component.scss'],
})
export class TextareaAndTitleComponent {
  @Input()
  public data?: TitleAndTextArea | null;
}
