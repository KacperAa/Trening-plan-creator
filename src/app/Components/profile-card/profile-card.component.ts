import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/Interfaces/profile.interface';
import { IconLink } from 'src/app/Interfaces/icon-link.interface';
import { MatDividerListData } from 'src/app/Interfaces/mat-divider-list-data.interface';

@Component({
  selector: 'app-profile-card[imageAndText][socialMediaData][listItemsData]',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input()
  public imageAndText!: Profile;
  @Input()
  public socialMediaData!: IconLink[];
  @Input()
  public listItemsData!: MatDividerListData[];
}
