import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/Services/register.service';
import { ControlsDirection } from 'src/app/Interfaces/controls-direction.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerFormControls$: Observable<ControlsDirection<string>[]> =
    this._registerService.getControls();

  constructor(private _registerService: RegisterService) {}
}
