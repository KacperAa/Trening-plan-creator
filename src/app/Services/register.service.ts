import { Injectable } from '@angular/core';
import {
  CheckboxControl,
  InputControl,
  PasswordControl,
} from '../Classes/form-base';
import { Observable, map, of } from 'rxjs';
import { ControlsDirection } from '../Interfaces/controls-direction.interface';
import { RegisteredUser } from '../Interfaces/registered-user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public getControls(): Observable<ControlsDirection<string>[]> {
    const controlsCollection: ControlsDirection<string>[] = [
      {
        direction: 'column',
        controls: [
          new InputControl({
            key: 'nickname',
            label: 'Nickname',
            required: true,
            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.])(?=\\S+$).{6,}$',
          }),
          new InputControl({
            key: 'email',
            label: 'Email@',
            type: 'email',
            required: true,
          }),
        ],
        order: 1,
      },
      {
        direction: 'row',
        controls: [
          new PasswordControl({
            key: 'password',
            label: 'Password',
            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.])(?=\\S+$).{6,}$',
          }),
          new PasswordControl({
            key: 'repeatPassword',
            label: 'Repeat password',
            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.])(?=\\S+$).{6,}$',
          }),
        ],
        order: 2,
      },
      {
        direction: 'column',
        controls: [
          new CheckboxControl({
            key: 'agreement',
            label:
              ' "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            required: true,
          }),
        ],
        order: 3,
      },
    ];

    return of(controlsCollection.sort((a, b) => a.order - b.order));
  }

  private _httpAdress: string =
    'https://login-7397c-default-rtdb.firebaseio.com/register.json';

  constructor(private _http: HttpClient) {}

  public registerUser(newUser: RegisteredUser): void {
    this._http
      .post<{ name: string }>(this._httpAdress, newUser)
      .subscribe((request) => {
        console.log(request);
      });
  }

  public getUsers() {
    return this._http.get<RegisteredUser[]>(this._httpAdress).pipe(
      map((responseData: RegisteredUser[]) => {
        const registeredUsers = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            registeredUsers.push({ ...responseData[key], key });
          }
        }
        return registeredUsers;
      })
    );
  }
}
