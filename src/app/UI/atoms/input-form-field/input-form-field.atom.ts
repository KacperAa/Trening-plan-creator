import { Component, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'ui-input-form-field[matLabel][placeholder][appereance]',
  templateUrl: './input-form-field.atom.html',
  styleUrls: ['./input-form-field.atom.scss'],
})
export class InputFormFieldComponent {
  @Input()
  public matLabel!: string;
  @Input()
  public placeholder!: string;
  @Input()
  public appereance!: MatFormFieldAppearance;
  @Input()
  public inputType: string = 'text';

  @Input()
  public width!: string;
  @Input()
  public labelFontSize!: string;
}
