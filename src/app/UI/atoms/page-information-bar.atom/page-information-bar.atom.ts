import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-page-information-bar[header]',
  templateUrl: './page-information-bar.atom.html',
  styleUrls: ['./page-information-bar.atom.scss'],
})
export class PageInformationBarComponent {
  @Input()
  public header!: string;
}
