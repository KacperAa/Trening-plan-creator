import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-logo[logoPath][isSmallDevice][hamburgerMenuState]',
  templateUrl: './hamburger-logo.component.html',
  styleUrls: ['./hamburger-logo.component.scss'],
})
export class HamburgerLogoComponent {
  @Input()
  public logoPath!: string;
  @Input()
  public isSmallDevice!: boolean;
  @Input()
  public hamburgerMenuState!: string;
  @Output()
  public openNav: EventEmitter<never> = new EventEmitter<never>();
}
