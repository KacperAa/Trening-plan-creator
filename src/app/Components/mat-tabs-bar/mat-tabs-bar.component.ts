import { Component, Input } from '@angular/core';
import { MatTabs } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-mat-tabs-bar[matTabsData]',
  templateUrl: './mat-tabs-bar.component.html',
  styleUrls: ['./mat-tabs-bar.component.scss'],
})
export class MatTabsBarComponent {
  @Input()
  public matTabsData!: MatTabs[];
}
