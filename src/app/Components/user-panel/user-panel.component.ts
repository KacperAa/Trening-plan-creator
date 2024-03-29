import { Component, Input } from '@angular/core';
import { UserPanelData } from 'src/app/Interfaces/user-panel-data.interface';

@Component({
  selector: 'app-user-panel[data]',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent {
  @Input()
  public data!: UserPanelData;
}
