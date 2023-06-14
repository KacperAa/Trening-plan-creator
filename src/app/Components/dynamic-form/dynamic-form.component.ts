import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from 'src/app/Classes/form-base';
import { FormControlService } from 'src/app/Services/form-control.service';
import { ControlsDirection } from 'src/app/Interfaces/controls-direction.interface';

@Component({
  selector: 'app-dynamic-form[controlsDirection]',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input()
  public controlsDirection: ControlsDirection[] | null = [];
  public form!: FormGroup;
  private get _controls(): FormBase<string>[] {
    return this.controlsDirection?.flatMap(
      (controlDirection: ControlsDirection) => controlDirection.controls
    ) as FormBase<string>[];
  }

  constructor(private _formControlService: FormControlService) {}

  public ngOnInit(): void {
    this.form = this._formControlService.toFormGroup(
      this._controls as FormBase<string>[]
    );
  }

  public onSubmit(): void {}
}
