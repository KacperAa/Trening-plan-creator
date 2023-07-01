import { Component } from '@angular/core';
import { TreningPlanTemplate } from 'src/app/Interfaces/plan-creator-form-data';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss'],
})
export class CreatePlanComponent {
  public isFormOpened: boolean = false;
  public daysOfWeek: string[] = ['Monday', 'Wednesday', 'Friday'];
  public treningTemplatesData: TreningPlanTemplate[] = [];
  public get treningDays(): string[] {
    return this.treningTemplatesData.flatMap(
      (treningDays) => treningDays.treningDays
    );
  }

  constructor() {
    setTimeout(() => {
      console.log(this.treningDays);
    }, 0);
  }

  public captureTreningTemplateData(
    createPlanData: TreningPlanTemplate[]
  ): void {
    this.treningTemplatesData = createPlanData;
  }

  public openAddExercise(): void {
    this.isFormOpened = true;
  }

  public closeAddExercise(): void {
    this.isFormOpened = false;
  }
}
