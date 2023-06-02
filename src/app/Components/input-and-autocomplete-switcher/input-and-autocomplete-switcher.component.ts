import { Component, Input } from '@angular/core';
import {
  InputTitleIcon,
  TitleAndAutocomplete,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector:
    'app-input-and-autocomplete-switcher[inputData][additionalOptionsData]',
  templateUrl: './input-and-autocomplete-switcher.component.html',
  styleUrls: ['./input-and-autocomplete-switcher.component.scss'],
})
export class InputAndAutocompletesSwitcherComponent {
  @Input()
  public inputData!: InputTitleIcon;
  @Input()
  public additionalOptionsData!: TitleAndAutocomplete[];
  public viewState: string = 'default';

  public menageViewState(): void {
    this.viewState =
      this.viewState === 'default' ? 'additionalOptions' : 'default';
  }
}
