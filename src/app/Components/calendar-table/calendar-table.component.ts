import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { ColumnAndText } from 'src/app/Interfaces/column-and-text.interface';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.scss'],
})
export class CalendarTableComponent implements OnInit, OnDestroy {
  public dataSource: PeriodicElement[] = ELEMENT_DATA;
  public columnsAndTexts: ColumnAndText[] = [
    {
      column: 'position',
      text: 'No.',
    },
    {
      column: 'exercise',
      text: 'Exercise',
    },
    {
      column: 'series',
      text: 'Series',
    },
    {
      column: 'serieOneWeight',
      text: 'Serie1',
    },
    {
      column: 'serieOneReps',
      text: 'Reps',
    },
    {
      column: 'serieOneRpe',
      text: 'RPE',
    },
    {
      column: 'serieTwoWeight',
      text: 'Serie2',
    },
    {
      column: 'serieTwoReps',
      text: 'Reps',
    },
    {
      column: 'serieTwoRpe',
      text: 'RPE',
    },
    {
      column: 'serieThreeWeight',
      text: 'Serie3',
    },
    {
      column: 'serieThreeReps',
      text: 'Reps',
    },
    {
      column: 'serieThreeRpe',
      text: 'RPE',
    },
  ];

  public columns: string[] = this.columnsAndTexts.map(
    (columnAndText: ColumnAndText) => columnAndText.column
  );
  public isSmallDevice: boolean = this._checkSmallDevice();
  private _subs: Subscription = new Subscription();

  constructor(private _viewportRuler: ViewportRuler) {}

  public ngOnInit(): void {
    this._checkSmallDevice();
    this._trackWindowWidth();
  }

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private _checkSmallDevice(): boolean {
    const windowWidth = this._viewportRuler.getViewportSize().width;
    return windowWidth < 845;
  }

  private _trackWindowWidth(): void {
    this._subs.add(
      fromEvent(window, 'resize')
        .pipe(debounceTime(0))
        .subscribe(() => {
          this.isSmallDevice = this._checkSmallDevice();
        })
    );
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
];
