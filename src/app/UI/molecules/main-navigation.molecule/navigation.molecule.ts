import { Component, Input } from '@angular/core';
import { hamburgerMenuAnimation } from 'src/app/Animations/own-animations';
import { IconLink, TitleAndMenu } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-navigation',
  templateUrl: './navigation.molecule.html',
  styleUrls: ['./navigation.molecule.scss'],
  animations: [hamburgerMenuAnimation],
})
export class NavigationComponent {
  @Input()
  public isHamburgerNav!: boolean;
  @Input()
  public hamburgerMenuState!: string;
  @Input()
  public isSmallDevice!: boolean;
  public navigationButtons: TitleAndMenu[] = [
    {
      title: 'Trening plan',
      menu: [{ title: 'Your plans' }, { title: 'Create plan' }],
      icon: 'fa-solid fa-ellipsis-vertical',
    },
    { title: 'Track progress', menu: [], icon: null },
    { title: 'Statistics', menu: [], icon: null },
    { title: 'Options', menu: [], icon: null },
    { title: 'Your Profile', menu: [], icon: null },
  ];
  public socialMediaData: IconLink[] = [
    {
      style: 'fa-brands fa-facebook-f',
      url: 'https://pl-pl.facebook.com/',
    },
    {
      style: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com/',
    },
    {
      style: 'fa-brands fa-twitter',
      url: 'https://twitter.com/?lang=pl',
    },
    {
      style: 'fa-brands fa-youtube',
      url: 'https://www.youtube.com/',
    },
    {
      style: 'fa-solid fa-envelope',
      url: 'https://www.google.com/intl/pl/gmail/about/',
    },
  ];
}
