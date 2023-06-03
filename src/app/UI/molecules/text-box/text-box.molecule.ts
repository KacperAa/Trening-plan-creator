import { Component, Input } from '@angular/core';
import { TextBox } from 'src/app/Interfaces/text-box.interface';

@Component({
  selector: 'ui-text-box[headerAndContents]',
  templateUrl: './text-box.molecule.html',
  styleUrls: ['./text-box.molecule.scss'],
})
export class TextBoxComponent {
  @Input()
  public headerAndContents!: TextBox;
}
