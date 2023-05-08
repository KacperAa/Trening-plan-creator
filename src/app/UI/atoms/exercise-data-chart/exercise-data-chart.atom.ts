import { Component } from '@angular/core';

@Component({
  selector: 'ui-exercise-data-chart',
  templateUrl: './exercise-data-chart.atom.html',
  styleUrls: ['./exercise-data-chart.atom.scss'],
})
export class ExerciseDataChartComponent {
  public multi: any[] = [];
  public view: [number, number] = [700, 300];
  // options
  public legend: boolean = true;
  public showLabels: boolean = true;
  public animations: boolean = true;
  public xAxis: boolean = true;
  public yAxis: boolean = true;
  public showYAxisLabel: boolean = true;
  public showXAxisLabel: boolean = true;
  public xAxisLabel: string = 'Time';
  public yAxisLabel: string = 'Weight';
  public timeline: boolean = true;
  public colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {
    Object.assign(this, { multi });
  }
}
export const multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '1990',
        value: 62000000,
      },
      {
        name: '2010',
        value: 73000000,
      },
      {
        name: '2011',
        value: 89400000,
      },
    ],
  },

  {
    name: 'USA',
    series: [
      {
        name: '1990',
        value: 250000000,
      },
      {
        name: '2010',
        value: 309000000,
      },
      {
        name: '2011',
        value: 311000000,
      },
    ],
  },

  {
    name: 'France',
    series: [
      {
        name: '1990',
        value: 58000000,
      },
      {
        name: '2010',
        value: 50000020,
      },
      {
        name: '2011',
        value: 58000000,
      },
    ],
  },
  {
    name: 'UK',
    series: [
      {
        name: '1990',
        value: 57000000,
      },
      {
        name: '2010',
        value: 62000000,
      },
    ],
  },
];
