import { Component } from '@angular/core';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss'],
})
export class CreatePlanComponent {
  public isFormOpened: boolean = false;
  public daysOfWeek: string[] = ['Monday', 'Wednesday', 'Friday'];

  public openAddExercise(): void {
    this.isFormOpened = true;
  }

  public closeAddExercise(): void {
    this.isFormOpened = false;
  }
}
