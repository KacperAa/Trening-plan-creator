import { Component, Input } from '@angular/core';
import { matCardAnimation } from 'src/app/Animations/own-animations';
import { Guide } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-guides[guide]',
  templateUrl: './guides.molecule.html',
  styleUrls: ['./guides.molecule.scss'],
  animations: [matCardAnimation],
})
export class GuidesComponent {
  @Input()
  public guide: Guide = {
    title: '',
    content: '',
    footerColor: 'red',
  };
  public matCardState: string = 'inactive';

  public matCardDown(): void {
    this.matCardState = 'active';
  }
  public matCardUp(): void {
    this.matCardState = 'inactive';
  }
}
