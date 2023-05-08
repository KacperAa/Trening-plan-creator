import { Component } from '@angular/core';
import {
  MatDividerListData,
  Profile,
  SocialMediaIconAndAdress,
} from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.organism.html',
  styleUrls: ['./profile-card.organism.scss'],
})
export class ProfileCardComponent {
  public imageAndText: Profile = {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    nickname: 'Judasz',
    assing: 'Ksiaze Ciemnosci',
  };

  public socialMediaData: SocialMediaIconAndAdress[] = [
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

  public listItemsData: MatDividerListData[] = [
    { title: 'Internship: 5years', list: [] },
    { title: 'Records:', list: ['BP:', 'SQ:'] },
    { title: 'Social Media:', list: [] },
  ];
}
