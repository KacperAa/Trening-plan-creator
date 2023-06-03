import { Component } from '@angular/core';
import { TableWithSearchComponent } from 'src/app/Components/table-with-search/table-with-search.component';
import { MatTabs } from 'src/app/Interfaces/mat-tabs.interface';

@Component({
  selector: 'app-track-progress',
  templateUrl: './track-progress.component.html',
  styleUrls: ['./track-progress.component.scss'],
})
export class TrackProgressComponent {
  public matTabsData: MatTabs[] = [
    {
      labelName: 'Actual Plan',
      content: TableWithSearchComponent,
    },
    { labelName: 'Exercises progress', content: TableWithSearchComponent },
  ];
}
