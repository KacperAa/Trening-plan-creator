import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsErrorsService {
  public setErrorMessage(control: AbstractControl) {
    if (control.hasError('required')) {
      return 'This field is <strong>required</strong>';
    }
    if (control.hasError('pattern')) {
      return 'Only <strong>numbers</strong> can be entered';
    }
    return '';
  }
}
