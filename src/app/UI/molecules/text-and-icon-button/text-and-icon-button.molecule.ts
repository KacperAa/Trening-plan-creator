import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-text-and-icon-button[text][matIcon]',
  templateUrl: './text-and-icon-button.molecule.html',
  styleUrls: ['./text-and-icon-button.molecule.scss'],
})
export class TextAndIconButtonComponent {
  @Input()
  public text!: string | Date;
  @Input()
  public dateFormat!: string;
  @Input()
  public matIcon!: string;
  @Output()
  public emitEvent: EventEmitter<never> = new EventEmitter<never>();
}
