import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import {
  BranchTreningTree,
  TreningListTree,
} from 'src/app/Interfaces/interfaces';

const TRAINING_HISTORY_DATA: TreningListTree[] = [
  {
    name: 'Actual Plan',
  },
  {
    name: '2023',
    children: [
      {
        name: 'Legs priorytet',
      },
      {
        name: 'Chest priorytet',
      },
    ],
  },
  {
    name: '2022',
    children: [
      {
        name: 'Legs priorytet',
      },
      {
        name: 'Chest priorytet',
      },
    ],
  },
];

@Component({
  selector: 'app-tree-of-plans',
  templateUrl: './tree-of-plans.component.html',
  styleUrls: ['./tree-of-plans.component.scss'],
})
export class TreeOfPlansComponent {
  constructor() {
    this.dataSource.data = TRAINING_HISTORY_DATA;
  }

  public branchIsExpended(branch: BranchTreningTree): boolean {
    return this.treeControl.isExpanded(branch);
  }

  public treeControl = new FlatTreeControl<BranchTreningTree>(
    (branch) => branch.level,
    (branch) => branch.isExpandable
  );

  private _transformToBranchTreningTree = (
    branch: TreningListTree,
    level: number
  ): BranchTreningTree => {
    return {
      isExpandable: !!branch.children && branch.children.length > 0,
      name: branch.name,
      level: level,
    };
  };

  public treeFlattener = new MatTreeFlattener(
    this._transformToBranchTreningTree,
    (branch) => branch.level,
    (branch) => branch.isExpandable,
    (branch) => branch.children
  );

  public dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener
  );

  public whenBranchHasChild(_: number, branch: BranchTreningTree): boolean {
    return branch.isExpandable;
  }
}
