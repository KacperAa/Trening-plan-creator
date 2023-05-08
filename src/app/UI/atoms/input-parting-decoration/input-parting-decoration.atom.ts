import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-input-parting-decoration[decoration]',
  templateUrl: './input-parting-decoration.atom.html',
  styleUrls: ['./input-parting-decoration.atom.scss'],
})
export class InputPartingDecorationComponent {
  @Input()
  public decoration: string | undefined;
}
