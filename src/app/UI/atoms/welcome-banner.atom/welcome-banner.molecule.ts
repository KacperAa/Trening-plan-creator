import { Component } from '@angular/core';
import { HeaderAndText } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-welcome-banner',
  templateUrl: './welcome-banner.molecule.html',
  styleUrls: ['./welcome-banner.molecule.scss'],
})
export class WelcomeBannerAtomComponent {
  public text: HeaderAndText = {
    header: 'Plan Creator',
    content: 'Efekty takie - że japierdole...',
  };
}
