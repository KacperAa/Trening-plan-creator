import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ControlsDirection } from 'src/app/Interfaces/controls-direction.interface';
import { PathAndText } from 'src/app/Interfaces/path-and-text.interface';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent {
  public inputsData$: Observable<ControlsDirection<string>[]> =
    this._loginService.getControls();

  public referencesText: string[] = ['Register', 'Recover password'];
  public routerPathAndText: PathAndText[] = [
    { path: '/register', text: 'Register' },
    { path: '/register', text: 'Recover password' },
  ];

  constructor(private _loginService: LoginService) {}

  public sendForm(form: FormGroup): void {
    console.log(form.value);
  }
}
