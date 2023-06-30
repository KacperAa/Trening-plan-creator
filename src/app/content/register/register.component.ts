import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/Services/register.service';
import { ControlsDirection } from 'src/app/Interfaces/controls-direction.interface';
import { FormGroup } from '@angular/forms';
import { RegisteredUser } from 'src/app/Interfaces/registered-user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerFormControls$: Observable<ControlsDirection<string>[]> =
    this._registerService.getControls();
  public registeredUsers: RegisteredUser[] = [];
  public isFetching: boolean = false; // na przyszłość do ładowania i sprawdzania, czy nazwa usera juz istnieje remember

  constructor(private _registerService: RegisterService) {}

  public sendForm(form: FormGroup): void {
    const newUserData: RegisteredUser = {
      nickname: form.value.nickname,
      email: form.value.email,
      password: form.value.password,
    };

    this._registerService.registerUser(newUserData);
  }

  public getRegisteredUsers() {
    this.isFetching = true; // loading
    this._registerService.getUsers().subscribe((request) => {
      this.isFetching = false; // loading
      this.registeredUsers = request;
    });
  }
}
