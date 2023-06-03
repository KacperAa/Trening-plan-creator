import { Component } from '@angular/core';
import { RadioButtonOption } from 'src/app/Interfaces/radio-button-option.interface';

@Component({
  selector: 'app-radio-buttons-and-chart',
  templateUrl: './radio-buttons-and-chart.component.html',
  styleUrls: ['./radio-buttons-and-chart.component.scss'],
})
export class RadioButtonsAndChartComponent {
  public checkedOption: string = '1RM';
  public radioButtonsOptions: RadioButtonOption[] = [
    { title: '1RM' },
    { title: 'PWS' },
  ];
}
