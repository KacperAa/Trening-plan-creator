export class FormBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  type: string;
  pattern: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      controlType?: string;
      type?: string;
      pattern?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.pattern = options.pattern || '';
  }
}

export class InputControl extends FormBase<string> {
  override controlType: string = 'input';
}

export class PasswordControl extends FormBase<string> {
  override required: boolean = true;
  override controlType: string = 'password';
  override type: string = 'password';
}

export class CheckboxControl extends FormBase<string> {
  override controlType: string = 'checkbox';
}
