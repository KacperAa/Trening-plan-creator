import { Component, Input } from '@angular/core';
import { MatDividerListData, IconLink } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-profile-list[listItemsData]',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileListComponent {
  @Input()
  public socialMediaData!: IconLink[];
  @Input()
  public listItemsData!: MatDividerListData[];
}
