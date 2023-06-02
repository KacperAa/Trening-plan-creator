import { Component } from '@angular/core';
import { BannerData, Guide, TextBox } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public text: BannerData = {
    header: 'Plan Creator',
    content: 'Efekty takie - że japierdole...',
    buttonText: 'Get started',
  };
  public headersAndContents: TextBox[] = [
    {
      title: 'Track progress',
      contents: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ' Aenean lectus massa, blandit et lorem ut, pharetra tristique mauris.',
      ],
    },
    {
      title: 'Incarase the effects',
      contents: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ' Aenean lectus massa, blandit et lorem ut, pharetra tristique mauris.',
      ],
    },
    {
      title: 'Keep in mind',
      contents: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ' Aenean lectus massa, blandit et lorem ut, pharetra tristique mauris.',
      ],
    },
  ];

  public guides: Guide[] = [
    {
      title: 'Register',
      content: 'Register your account and japierdole',
      footerColor: 'red',
    },
    {
      title: 'Statistics',
      content: 'See which exercises you do most often',
      footerColor: 'red',
    },
    {
      title: 'Track progress',
      content: 'Check what progress you have achieved!',
      footerColor: 'red',
    },
  ];
}
