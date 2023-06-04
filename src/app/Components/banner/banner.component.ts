import { Component, Input } from '@angular/core';
import { BannerData } from 'src/app/Interfaces/banner-data.interface';

@Component({
  selector: 'app-banner[data]',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input()
  public data!: BannerData;
}
