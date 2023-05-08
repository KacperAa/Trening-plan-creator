import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-bolt-title[title]',
  templateUrl: './little-title.atom.html',
  styleUrls: ['./little-title.atom.scss'],
})
export class LittleTitleComponent {
  @Input()
  public title?: string | null;
  @Input()
  public fontSize!: string;
}
