import { Component, Input } from '@angular/core';
import { TextArea } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-textarea-and-title[data]',
  templateUrl: './textarea-and-title.molecule.html',
  styleUrls: ['./textarea-and-title.molecule.scss'],
})
export class TextareaAndTitleComponent {
  @Input()
  public data?: TextArea | null;
}
