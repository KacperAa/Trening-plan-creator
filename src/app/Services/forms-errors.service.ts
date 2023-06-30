import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsErrorsService {
  public setErrorMessage(control: AbstractControl) {
    if (control.hasError('required')) {
      return this._getRequiredError();
    }

    if (control.hasError('maxlength')) {
      return this._getMaxLengthError(control);
    }

    if (control.hasError('pattern')) {
      return this._getPatternError(control);
    }

    if (control.hasError('email')) {
      return this._getEmailError();
    }

    if (control.hasError('repeatPasswordError')) {
      return this._getRepeatPasswordError();
    }
    return '';
  }

  private _getRequiredError(): string {
    return 'This field is <strong>required</strong>';
  }

  private _getMaxLengthError(control: AbstractControl): string {
    const getMaxLength = control.getError('maxlength').requiredLength;

    return `Maximum character length is <strong>${getMaxLength}</strong>`;
  }

  private _getPatternError(control: AbstractControl): string {
    const patternError = control.getError('pattern');

    if (patternError.requiredPattern === '/^[0-9]*$/') {
      return 'Only <strong>numbers</strong> can be entered';
    } else if (
      patternError.requiredPattern ===
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.])(?=\\S+$).{6,}$'
    ) {
      return '<strong>Capital letter</strong>, one <strong>special character</strong> and number required';
    } else if (patternError.requiredPattern === '/^[0-9]+$/') {
      return 'Only <strong>numbers</strong> can be entered';
    } else if (patternError.requiredPattern === '/^[a-zA-Z ]+$/') {
      return 'Only <strong>letters</strong> can be entered';
    }

    return '';
  }

  private _getEmailError(): string {
    return 'Invalid email <strong>format</strong>';
  }

  private _getRepeatPasswordError(): string {
    return 'Wrong <strong>password</strong>';
  }
}
