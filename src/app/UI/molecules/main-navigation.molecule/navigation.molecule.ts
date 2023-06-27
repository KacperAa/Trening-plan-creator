import { Component, Input } from '@angular/core';
import { hamburgerMenuAnimation } from 'src/app/Animations/own-animations';
import { IconLink } from 'src/app/Interfaces/icon-link.interface';
import { TitleAndMenu } from 'src/app/Interfaces/title-and-menu.interface';

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

  public navigationButtons: TitleAndMenu[] = [
    {
      title: 'Trening plan',
      menu: [
        { title: 'Your plans', routerLink: '/plans' },
        { title: 'Create plan', routerLink: '/create-plan' },
      ],
      icon: 'fa-solid fa-ellipsis-vertical',
      routerLink: null,
    },
    {
      title: 'Track progress',
      menu: [],
      icon: null,
      routerLink: '/track-progress',
    },
    {
      title: 'Todays Trening',
      menu: [],
      icon: null,
      routerLink: '/todays-plan',
    },
    { title: 'Options', menu: [], icon: null, routerLink: '/options' },
    {
      title: 'Your Profile',
      menu: [],
      icon: null,
      routerLink: '/your-profile',
    },
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
