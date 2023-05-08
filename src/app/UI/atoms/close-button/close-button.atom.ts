import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-close-button',
  templateUrl: './close-button.atom.html',
  styleUrls: ['./close-button.atom.scss'],
})
export class CloseButtonComponent {
  @Output()
  public emitEvent: EventEmitter<never> = new EventEmitter<never>();
}
