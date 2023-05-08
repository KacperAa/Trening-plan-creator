import { Component, Input } from '@angular/core';
import { RadioButtonsData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-radio-buttons-and-chart[radioButtonsData]',
  templateUrl: './radio-buttons-and-chart.organism.html',
  styleUrls: ['./radio-buttons-and-chart.organism.scss'],
})
export class RadioButtonsAndChartComponent {
  @Input()
  public radioButtonsData!: RadioButtonsData;
}
