import { Component, Input } from '@angular/core';
import { Options } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-options-page[optionsPage]',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.scss'],
})
export class OptionsFormComponent {
  @Input()
  public optionsPage!: Options;
}
