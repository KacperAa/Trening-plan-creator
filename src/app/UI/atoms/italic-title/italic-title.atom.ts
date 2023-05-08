import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-italic-title[title]',
  templateUrl: './italic-title.atom.html',
  styleUrls: ['./italic-title.atom.scss'],
})
export class ItalicTitleComponent {
  @Input()
  public title!: string;
}
