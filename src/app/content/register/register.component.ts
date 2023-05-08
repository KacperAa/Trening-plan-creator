import { Component } from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public title: string = 'Register';
  public inputsData: InputFormField[] = [
    {
      title: null,
      matLabel: 'login',
      placeholder: '...',
      appereance: 'outline',
    },
    {
      title: null,
      matLabel: 'email',
      placeholder: '@...',
      appereance: 'outline',
    },
    {
      title: null,
      matLabel: 'password',
      placeholder: '...',
      appereance: 'outline',
    },
    {
      title: null,
      matLabel: 'password',
      placeholder: '...',
      appereance: 'outline',
    },
  ];

  public buttonsText: string[] = ['Create Account'];
}
