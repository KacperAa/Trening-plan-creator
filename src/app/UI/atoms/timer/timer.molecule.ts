import { Component } from '@angular/core';

@Component({
  selector: 'ui-timer',
  templateUrl: './timer.molecule.html',
  styleUrls: ['./timer.molecule.scss'],
})
export class TimerComponent {
  public time: number = 180;
  public timer: any;

  public formatTime(time: number): Date {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const date = new Date();
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
  }

  public startTimer(): void {
    this.timer = setInterval(() => {
      this.time > 0 ? this.time-- : null;
    }, 1000);
  }

  public stopTimer(): void {
    clearInterval(this.timer);
  }

  public resetTimer(): void {
    this.time = 180;
  }
}
