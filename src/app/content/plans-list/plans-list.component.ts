import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheet } from 'src/app/Interfaces/interfaces';

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
}
