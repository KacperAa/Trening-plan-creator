import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar, CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BarData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar') public calendarRef!: FullCalendarComponent;

  public barData: BarData = {
    bar: { title: null, hasCloseButton: true },
  };

  public calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    initialDate: new Date(),
    events: [
      {
        id: '0',
        title: 'Trening 2023-05-12 ',
        start: '2023-05-12',
        extendedProps: {
          title: 'anyData',
        } /*  Add trening plan object date here */,
      },
      {
        id: '1',
        title: 'Trening 2023-05-14',
        start: '2023-05-14',
        extendedProps: {
          title: 'anyData',
        } /*  Add trening plan object date here */,
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
    this.barData.bar.title = this._datePipe.transform(
      eventClick.event.start,
      'EEEE, yyyy MMMM dd'
    );
  }

  public closeTable(): void {
    this.barData.bar.title = null;
  }

  private _getCalendarApi(): Calendar {
    return this.calendarRef.getApi();
  }
}
