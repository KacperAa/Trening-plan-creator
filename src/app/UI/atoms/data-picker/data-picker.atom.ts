import { Component, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'ui-data-picker[matLabel][inputAppereance]',
  templateUrl: './data-picker.atom.html',
  styleUrls: ['./data-picker.atom.scss'],
})
export class DataPickerComponent {
  @Input()
  public matLabel!: string;
  @Input()
  public inputAppereance!: MatFormFieldAppearance;
}
