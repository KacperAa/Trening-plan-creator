import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-title-on-bar[title]',
  templateUrl: './title-on-bar.atom.html',
  styleUrls: ['./title-on-bar.atom.scss'],
})
export class TitleOnBarComponent {
  @Input()
  public title!: string | null;
  @Input()
  public hasCloseButton!: boolean;
  @Output()
  public emitClick: EventEmitter<never> = new EventEmitter<never>();
}
