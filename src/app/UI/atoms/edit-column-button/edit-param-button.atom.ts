import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../molecules/dialog-form/dialog-form.molecule';

@Component({
  selector: 'ui-edit-param-button[column][row]',
  templateUrl: './edit-param-button.atom.html',
  styleUrls: ['./edit-param-button.atom.scss'],
})
export class EditColumnButtonComponent {
  @Input()
  public column!: string;
  @Input()
  public row!: any;

  public inputValue: string = '';

  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      this.inputValue = this.row[this.column.toLowerCase()];
    }, 0);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      data: {
        title: this.column,
        placeholder: this.column,
        inputValue: this.inputValue,
      },
    });
    dialogRef.afterClosed().subscribe((inputValue) => {
      this.inputValue = inputValue;
    });
  }
}
