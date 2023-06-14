import { Injectable } from '@angular/core';
import {
  CheckboxControl,
  InputControl,
  PasswordControl,
} from '../Classes/form-base';
import { Observable, of } from 'rxjs';
import { ControlsDirection } from '../Interfaces/controls-direction.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public getControls(): Observable<ControlsDirection[]> {
    const controlsCollection: ControlsDirection[] = [
      {
        direction: 'column',
        controls: [
          new InputControl({
            key: 'nickname',
            label: 'Nickname',
            required: true,
            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{3,}$',
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
            type: 'password',
            required: true,
          }),
          new PasswordControl({
            key: 'repeatPassword',
            label: 'Repeat password',
            type: 'password',
            required: true,
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
}
