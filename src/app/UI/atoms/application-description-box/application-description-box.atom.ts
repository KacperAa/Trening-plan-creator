import { Component, Input } from '@angular/core';
import { HomePagePromo } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-application-description-box[headerAndContents]',
  templateUrl: './application-description-box.atom.html',
  styleUrls: ['./application-description-box.atom.scss'],
})
export class ApplicationDescriptionBoxComponent {
  @Input()
  public headerAndContents!: HomePagePromo;
}
