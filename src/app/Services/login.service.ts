import { Injectable } from '@angular/core';
import { ControlsDirection } from '../Interfaces/controls-direction.interface';
import { Observable, of } from 'rxjs';
import { InputControl, PasswordControl } from '../Classes/form-base';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public getControls(): Observable<ControlsDirection<string>[]> {
    const controlsCollection: ControlsDirection<string>[] = [
      {
        direction: 'column',
        controls: [
          new InputControl({
            key: 'nickname',
            label: 'Nickname',
            required: true,
          }),
          new PasswordControl({
            key: 'password',
            label: 'password',
          }),
        ],
        order: 1,
      },
    ];

    return of(controlsCollection.sort((a, b) => a.order - b.order));
  }
}
