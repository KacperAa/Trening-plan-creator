import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-profile-image[imageAdress]',
  templateUrl: './profile-image.atom.html',
  styleUrls: ['./profile-image.atom.scss'],
})
export class ProfileImageComponent {
  @Input()
  public imageAdress!: string;
}
