import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormBase } from 'src/app/Classes/form-base';

@Component({
  selector: 'app-dynamic-form-control[control]',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss'],
})
export class DynamicFormControlComponent {
  @Input()
  public control!: FormBase<string>;
  @Input()
  public form!: FormGroup;
  public get formControl() {
    return this.form.controls[this.control.key];
  }
  public get isValid() {
    return this.form.controls[this.control.key].valid;
  }

  public setInvalidCheckboxIfNoChecked(checkbox: MatCheckbox): void {
    !checkbox.checked
      ? this.form.controls[this.control.key].setErrors({ invalid: true })
      : null;
  }

  public setErrorMessage(): string {
    if (this.formControl.hasError('required')) {
      return this._getRequiredError();
    }

    if (this.formControl.hasError('maxlength')) {
      return this._getMaxLengthError();
    }

    if (this.formControl.hasError('pattern')) {
      return this._getPatternError();
    }

    if (this.formControl.hasError('email')) {
      return this._getEmailError();
    }

    if (this.formControl.hasError('repeatPasswordError')) {
      return this._getRepeatPasswordError();
    }

    return '';
  }

  private _getRequiredError(): string {
    return this.control.label + ' is <strong>required</strong>';
  }

  private _getMaxLengthError(): string {
    const getMaxLength = this.formControl.getError('maxlength').requiredLength;

    return `Maximum character length is <strong>${getMaxLength}</strong>`;
  }

  private _getPatternError(): string {
    return '<strong>Capital letter</strong>,one <strong>special character</strong> and number required';
  }

  private _getEmailError(): string {
    return 'Invalid email <strong>format</strong>';
  }

  private _getRepeatPasswordError(): string {
    return 'Wrong <strong>password</strong>';
  }
}
