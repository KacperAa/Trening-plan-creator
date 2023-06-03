import { Component, Input } from '@angular/core';
import { MatDividerListData, Profile } from 'src/app/Interfaces/interfaces';
import { IconLink } from 'src/app/Interfaces/icon-link.interface';

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
