import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/input-form-field.interface';
import { InputTitleIcon } from 'src/app/Interfaces/input-title-icon.interface';
import { TitleAndAutocomplete } from 'src/app/Interfaces/title-and-autocomplete.interface';
import { FormsErrorsService } from 'src/app/Services/forms-errors.service';
import { SwitcherViewState } from 'src/app/Types/view-state';

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
  @Output()
  public scenario: EventEmitter<SwitcherViewState> =
    new EventEmitter<SwitcherViewState>();
  public viewState: SwitcherViewState = 'default';
  public get input(): InputFormField {
    return this.inputData.input;
  }

  constructor(private _errorFormService: FormsErrorsService) {}

  public menageViewState(): void {
    this.viewState =
      this.viewState === 'default' ? 'additionalOptions' : 'default';
    this._emitScenario();
  }

  public getErrorMessage(): string {
    return this._errorFormService.setErrorMessage(this.input.formControl!);
  }

  private _emitScenario(): void {
    this.scenario.emit(this.viewState);
  }
}
