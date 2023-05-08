import { Component } from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent {
  public title: string = 'Login';
  public inputsData: InputFormField[] = [
    {
      title: null,
      matLabel: 'login',
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
  public referencesText: string[] = ['Register', 'Recover password'];
  public buttonsText: string[] = ['login'];
}
