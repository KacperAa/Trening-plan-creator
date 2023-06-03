import { Component, Input } from '@angular/core';
import { InputTitleIcon } from 'src/app/Interfaces/input-title-icon.interface';
import { TitleAndAutocomplete } from 'src/app/Interfaces/title-and-autocomplete.interface';

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
