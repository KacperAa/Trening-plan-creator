import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-title-letter-spacing[text]',
  templateUrl: './header-letter-spacing.atom.html',
  styleUrls: ['./header-letter-spacing.atom.scss'],
})
export class HeaderLetterSpacingComponent {
  @Input()
  public text?: string | null;
  @Input()
  public fontSize!: string;
}
