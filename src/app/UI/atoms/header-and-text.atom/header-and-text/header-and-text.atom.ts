import { Component, Input } from '@angular/core';
import { HeaderAndText } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-header-and-text[text]',
  templateUrl: './header-and-text.atom.html',
  styleUrls: ['./header-and-text.atom.scss'],
})
export class HeaderAndTextComponent {
  @Input()
  public text!: HeaderAndText;
}
