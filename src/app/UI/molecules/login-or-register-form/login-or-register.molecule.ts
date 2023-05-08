import { Component, Input } from '@angular/core';
import { InputFormField } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-login-or-register-form[title][inputsData][buttonsText]',
  templateUrl: './login-or-register-form.molecule.html',
  styleUrls: ['./login-or-register-form.molecule.scss'],
})
export class LoginFormComponent {
  @Input()
  public title!: string;
  @Input()
  public inputsData!: InputFormField[];
  @Input()
  public buttonsText!: string[];
  @Input()
  public referencesText!: string[];
}
