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
}
