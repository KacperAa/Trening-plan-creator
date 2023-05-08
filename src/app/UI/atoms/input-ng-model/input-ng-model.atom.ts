import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-input-ng-model[placeholder][inputValue]',
  templateUrl: './input-ng-model.atom.html',
  styleUrls: ['./input-ng-model.atom.scss'],
})
export class InputNgModelComponent {
  @Input()
  public placeholder!: string;
  @Input()
  public inputValue!: string;
  @Output()
  public emitInputValue: EventEmitter<string> = new EventEmitter<string>();
}
