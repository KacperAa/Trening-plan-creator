import { Component, Input } from '@angular/core';
import { MatDividerListData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'ui-list-item-and-divider[listItemData]',
  templateUrl: './list-item-and-divider.molecule.html',
  styleUrls: ['./list-item-and-divider.molecule.scss'],
})
export class ListItemAndDividerComponent {
  @Input()
  public listItemData!: MatDividerListData;
}
