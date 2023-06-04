import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/input-form-field.interface';
import { DecoratedInputsGroup } from 'src/app/Interfaces/decorated-inputs-group.interface';

@Component({
  selector: 'ui-decorated-input-group[data]',
  templateUrl: './decorated-input-group.molecule.html',
  styleUrls: ['./decorated-input-group.molecule.scss'],
})
export class DecoratedInputGroup implements OnChanges {
  @Input()
  public data!: DecoratedInputsGroup<string>;
  @Output()
  public emitClickEvent: EventEmitter<never> = new EventEmitter<never>();
  public partingDecoration!: string;

  public ngOnChanges(): void {
    this.partingDecoration = this._setPartingDecoration();
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
