import { Component, HostListener, Input } from '@angular/core';
import { animationSocialMedia } from 'src/app/Animations/own-animations';
import { SocialMediaIconAndAdress } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-social-media-adresses[styleAndSocialMediaAdress]',
  templateUrl: './social-media-adresses.atom.html',
  styleUrls: ['./social-media-adresses.atom.scss'],
  animations: [animationSocialMedia],
})
export class SocialMediaAdressesComponent {
  @Input()
  public styleAndSocialMediaAdress: SocialMediaIconAndAdress = {
    style: '',
    url: '',
  };
  public socialMediaAdressState: string = 'unhold';

  public goToSocialMediaAdress(url: string | undefined): void {
    window.open(url, '_blank');
  }

  @HostListener('window: mouseout', ['$event'])
  onMouseOut() {
    if (this.socialMediaAdressState === 'hold')
      this.socialMediaAdressState = 'unhold';
  }

  public socialMediaIconMouseUp(): void {
    this.socialMediaAdressState = 'unhold';
  }

  public socialMediaIconMouseDown(url: string | undefined): void {
    this.socialMediaAdressState = 'hold';
    setTimeout(() => {
      window.open(url, '_blank');
    }, 100);
  }
}
