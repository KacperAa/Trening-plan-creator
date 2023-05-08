import { FormGroup } from '@angular/forms';

export function atLeastOneRequiredField(
  group: FormGroup
): { invalid: true } | null {
  const checked = Object.values(group.controls).some(
    (control) => control.value
  );
  return checked ? null : { invalid: true };
}
