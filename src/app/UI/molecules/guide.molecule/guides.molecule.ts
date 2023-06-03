import { Component, Input } from '@angular/core';
import { matCardAnimation } from 'src/app/Animations/own-animations';
import { Guide } from 'src/app/Interfaces/guide.interface';

@Component({
  selector: 'ui-guides[guide]',
  templateUrl: './guides.molecule.html',
  styleUrls: ['./guides.molecule.scss'],
  animations: [matCardAnimation],
})
export class GuidesComponent {
  @Input()
  public guide!: Guide;
  public animationState: string = 'inactive';

  public matCardDown(): void {
    this.animationState = 'active';
  }
  public matCardUp(): void {
    this.animationState = 'inactive';
  }
}
