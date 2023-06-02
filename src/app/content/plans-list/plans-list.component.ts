import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheet } from 'src/app/Interfaces/interfaces';
/* import { BottomSheetComponent } from 'src/app/UI/molecules/bottom-sheet/bottom-sheet.molecule'; */

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.scss'],
})
export class PlansListComponent {
  public bottomSheetData: BottomSheet[] = [
    { name: 'Leg priorytet', title: 'Plan finished:', date: 'xxx' },
    { name: 'Chest priorytet', title: 'Plan finished:', date: 'xxx' },
    { name: 'Leg priorytet', title: 'Plan finished:', date: 'xxx' },
  ];

  constructor(private _bottomSheet: MatBottomSheet) {}

  /*   public openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent, {
      data: this.bottomSheetData,
    });
  } */
}
