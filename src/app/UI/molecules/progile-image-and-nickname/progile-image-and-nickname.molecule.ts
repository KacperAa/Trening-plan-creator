import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-progile-image-and-nickname[data]',
  templateUrl: './progile-image-and-nickname.molecule.html',
  styleUrls: ['./progile-image-and-nickname.molecule.scss'],
})
export class ProgileImageAndNicknameComponent {
  @Input()
  public data!: Profile;
}
