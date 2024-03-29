import { Component } from '@angular/core';
import { IconLink } from 'src/app/Interfaces/icon-link.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public logoPath: string = 'assets/logo.png';
  public date: Date = new Date();
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
