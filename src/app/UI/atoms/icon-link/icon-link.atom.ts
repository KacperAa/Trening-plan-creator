import { Component, HostListener, Input } from '@angular/core';
import { animationSocialMedia } from 'src/app/Animations/own-animations';
import { IconLink } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-icon-link[socialMediaData]',
  templateUrl: './icon-link.atom.html',
  styleUrls: ['./icon-link.atom.scss'],
  animations: [animationSocialMedia],
})
export class SocialMediaAdressesComponent {
  @Input()
  public socialMediaData!: IconLink;
  public animationState: string = 'unhold';

  @HostListener('window: mouseout', ['$event'])
  public onMouseOut(): void {
    if (this.animationState === 'hold') this.animationState = 'unhold';
  }

  public iconMouseUp(): void {
    this.animationState = 'unhold';
  }

  public iconMouseDown(url: string): void {
    this.animationState = 'hold';
    setTimeout(() => {
      this._redirectToUrl(url);
    }, 100);
  }

  private _redirectToUrl(url: string): void {
    window.open(url, '_blank');
  }
}
