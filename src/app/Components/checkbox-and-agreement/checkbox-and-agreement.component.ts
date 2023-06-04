import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-and-agreement[text]',
  templateUrl: './checkbox-and-agreement.component.html',
  styleUrls: ['./checkbox-and-agreement.component.scss'],
})
export class CheckboxAndAgreementComponent {
  @Input()
  public text!: string;
}
