import { Component, Input } from '@angular/core';
import { Options } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-options-form[optionsPage]',
  templateUrl: './options-form.organism.html',
  styleUrls: ['./options-form.organism.scss'],
})
export class OptionsFormComponent {
  @Input()
  public optionsPage!: Options;
}
