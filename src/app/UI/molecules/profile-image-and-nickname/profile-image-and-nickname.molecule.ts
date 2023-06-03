import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/Interfaces/profile.interface';

@Component({
  selector: 'ui-profile-image-and-nickname[data]',
  templateUrl: './profile-image-and-nickname.molecule.html',
  styleUrls: ['./profile-image-and-nickname.molecule.scss'],
})
export class ProfileImageAndNicknameComponent {
  @Input()
  public data!: Profile;
}
