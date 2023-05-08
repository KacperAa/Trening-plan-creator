import { Component } from '@angular/core';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss'],
})
export class CreatePlanComponent {
  public isAddExerciseFormOpened: boolean = false;
  public daysOfWeek: string[] = ['Monday', 'Wednesday', 'Friday'];

  public openAddExForm(): void {
    this.isAddExerciseFormOpened = true;
  }

  public closeExForm(): void {
    this.isAddExerciseFormOpened = false;
  }
}
