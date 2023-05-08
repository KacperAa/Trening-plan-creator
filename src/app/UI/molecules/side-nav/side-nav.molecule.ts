import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { markButton } from 'src/app/Animations/own-animations';

@Component({
  selector: 'ui-side-nav[buttonsText]',
  templateUrl: './side-nav.molecule.html',
  styleUrls: ['./side-nav.molecule.scss'],
  animations: [markButton],
})
export class SideNavComponent implements OnInit {
  @Input()
  public buttonsText!: string[];
  @Output()
  public emitSelectedOption: EventEmitter<string> = new EventEmitter<string>();

  public selectedOption!: string;

  public ngOnInit(): void {
    this.selectedOption = this._setSelectedOption();
  }

  public getAnimationState(text: string): string {
    return this.selectedOption === text ? 'marked' : 'unmarked';
  }

  public selectOption(text: string): void {
    this.selectedOption = text;
  }

  private _setSelectedOption(): string {
    return this.buttonsText[0];
  }
}
