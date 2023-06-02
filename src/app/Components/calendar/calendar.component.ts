import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar, CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BarAndTable } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar') public calendarRef!: FullCalendarComponent;

  public tableAndBarData: BarAndTable = {
    bar: { title: null, hasCloseButton: true },
    table: {
      columns: ['Ex', 'Series', 'Reps', 'Weight'],
      dataSource: ELEMENT_DATA,
    },
  };

  public calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    initialDate: new Date(),
    events: [
      {
        id: '0',
        title: 'trening',
        start: '2023-05-12',
        extendedProps: { title: 'dupa' } /*  Add object date here */,
      },
      {
        id: '1',
        title: 'trening',
        start: '2023-05-14',
        extendedProps: { title: 'dupa' } /*  Add object date here */,
      },
    ],
    eventDisplay: 'block',
    eventMouseEnter: function (mouseEnterInfo) {
      mouseEnterInfo.el.style.cursor = 'pointer';
    },
    eventClick: this.clickEvent.bind(this),
  };

  constructor(private _datePipe: DatePipe) {}

  public ngAfterViewInit(): void {
    this._getCalendarApi().gotoDate('2023-05-01');
    /*  this method go to date chosen data */
  }

  public clickEvent(eventClick: EventClickArg): void {
    this.tableAndBarData.bar.title = this._datePipe.transform(
      eventClick.event.start,
      'EEEE, yyyy MMMM dd'
    );
  }

  public closeTable(): void {
    this.tableAndBarData.bar.title = null;
  }

  private _getCalendarApi(): Calendar {
    return this.calendarRef.getApi();
  }
}

export interface ExerciseParams {
  ex: string;
  series: number;
  reps: number;
  rpe: number;
  icons: any;
}

const ELEMENT_DATA: ExerciseParams[] = [
  {
    ex: 'Bench Press',
    series: 3,
    reps: 12,
    rpe: 8,
    icons: [
      { column: 'Delete', icon: 'delete' },
      { column: 'Edit', icon: 'create' },
    ],
  },
  {
    ex: 'Front Squad',
    series: 3,
    reps: 12,
    rpe: 9,
    icons: [
      { column: 'Delete', icon: 'delete' },
      { column: 'Edit', icon: 'create' },
    ],
  },
];
