import { Component, Input } from '@angular/core';
import { EditImage } from 'src/app/Interfaces/edit-image.interface';

@Component({
  selector: 'ui-edit-image[data]',
  templateUrl: './edit-image.molecule.html',
  styleUrls: ['./edit-image.molecule.scss'],
})
export class EditImageComponent {
  @Input()
  public data!: EditImage;
}
