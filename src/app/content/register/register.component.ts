import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxsAndTitle } from 'src/app/Interfaces/checkboxs-and-title.interface';
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
      matLabel: 'Login',
      placeholder: '...',
      appereance: 'fill',
    },
    {
      matLabel: 'Email',
      placeholder: '@...',
      appereance: 'fill',
    },
    {
      matLabel: 'Password',
      placeholder: '...',
      appereance: 'outline',
      inputType: 'password',
    },
    {
      matLabel: 'Repeat password',
      placeholder: '...',
      appereance: 'outline',
      inputType: 'password',
    },
  ];

  public agreementText: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ";

  public checkIsPasswordBoxElement(matLabel: string): boolean {
    return matLabel === 'Password' || matLabel === 'Repeat password'
      ? true
      : false;
  }
}
