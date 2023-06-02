import { Component, Input } from '@angular/core';
import { BannerData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-banner[data]',
  templateUrl: './banner.molecule.html',
  styleUrls: ['./banner.molecule.scss'],
})
export class BannerComponent {
  @Input()
  public data!: BannerData;
}
