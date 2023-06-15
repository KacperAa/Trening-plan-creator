import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function oneRequiredField(group: FormGroup): { invalid: true } | null {
  const checked = Object.values(group.controls).some(
    (control) => control.value
  );
  return checked ? null : { invalid: true };
}
export function repeatPasswordValidator(passwordFieldKey: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const getPasswordValue = control.parent?.get(passwordFieldKey)?.value;
    const repeatPasswordValue = control.value;

    if (repeatPasswordValue !== getPasswordValue) {
      return { repeatPasswordError: true };
    }

    if (!control.parent?.get(passwordFieldKey)) {
      throw new Error(
        `Form control with key ${passwordFieldKey} does not exist!`
      );
    }

    return null;
  };
}
