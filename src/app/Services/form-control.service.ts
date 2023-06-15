import { Injectable } from '@angular/core';
import { FormBase } from '../Classes/form-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { repeatPasswordValidator } from '../Validators/validators';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  public toFormGroup(controls: FormBase<string>[]) {
    const group: any = {};

    controls.forEach((control: FormBase<string>) => {
      group[control.key] = control.required
        ? new FormControl(control.value || '', [Validators.required])
        : new FormControl(control.value || '');

      if (control.type === 'email') {
        group[control.key].addValidators(Validators.email);
      }

      if (control.controlType === 'input') {
        group[control.key].addValidators(Validators.maxLength(14));
      }

      if (control.controlType === 'password') {
        group[control.key].addValidators(Validators.maxLength(16));
      }

      if (control.pattern !== '') {
        group[control.key].addValidators(Validators.pattern(control.pattern));
      }

      if (control.key === 'repeatPassword') {
        group[control.key].addValidators(repeatPasswordValidator('password'));
      }
    });

    return new FormGroup(group);
  }
}
