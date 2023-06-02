import { Component, Input } from '@angular/core';
import { MatDividerListData } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-list-item-and-divider[listItemData]',
  templateUrl: './list-item-and-divider.component.html',
  styleUrls: ['./list-item-and-divider.component.scss'],
})
export class ListItemAndDividerComponent {
  @Input()
  public listItemData!: MatDividerListData;
}
