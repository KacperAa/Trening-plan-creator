import { Component, Input } from '@angular/core';
import { MatDividerListData, IconLink } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-list[listItemsData]',
  templateUrl: './list.molecule.html',
  styleUrls: ['./list.molecule.scss'],
})
export class ListComponent {
  @Input()
  public socialMediaData!: IconLink[];
  @Input()
  public listItemsData!: MatDividerListData[];
}
