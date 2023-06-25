import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/input-form-field.interface';
import { DecoratedInputsGroup } from 'src/app/Interfaces/decorated-inputs-group.interface';
import { FormsErrorsService } from 'src/app/Services/forms-errors.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ui-decorated-input-group[data]',
  templateUrl: './decorated-input-group.molecule.html',
  styleUrls: ['./decorated-input-group.molecule.scss'],
})
export class DecoratedInputGroup implements OnChanges {
  @Input()
  public data!: DecoratedInputsGroup<string | undefined>;
  @Output()
  public emitClickEvent: EventEmitter<never> = new EventEmitter<never>();
  public partingDecoration!: string;

  constructor(private _setErrorService: FormsErrorsService) {}

  public ngOnChanges(): void {
    this.partingDecoration = this._setPartingDecoration();
  }

  public setErrorMessage(formControl: FormControl): string {
    return this._setErrorService.setErrorMessage(formControl);
  }

  public isNotLastInput(input: InputFormField): boolean {
    return this.data.inputs.indexOf(input) !== this.data.inputs.length - 1;
  }

  private _setPartingDecoration(): string {
    const basicDecoration = '/';
    const custonDecoration = this.data.customDecoration as string;
    return this.data.customDecoration !== undefined
      ? custonDecoration
      : basicDecoration;
  }
}
