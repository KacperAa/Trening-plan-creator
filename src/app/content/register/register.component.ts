import { Component } from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/input-form-field.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public title: string = 'Register';
  public inputsData: InputFormField[] = [
    {
      matLabel: 'login',
      placeholder: '...',
      appereance: 'outline',
    },
    {
      matLabel: 'email',
      placeholder: '@...',
      appereance: 'outline',
    },
    {
      matLabel: 'password',
      placeholder: '...',
      appereance: 'outline',
    },
    {
      matLabel: 'password',
      placeholder: '...',
      appereance: 'outline',
    },
  ];

  public buttonsText: string[] = ['Create Account'];
}
