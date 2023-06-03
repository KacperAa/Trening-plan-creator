import { Component, Input } from '@angular/core';
import { BannerData } from 'src/app/Interfaces/banner-data.interface';

@Component({
  selector: 'ui-banner[data]',
  templateUrl: './banner.molecule.html',
  styleUrls: ['./banner.molecule.scss'],
})
export class BannerComponent {
  @Input()
  public data!: BannerData;
}
