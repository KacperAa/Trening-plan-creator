import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { UserPanelData } from 'src/app/Interfaces/user-panel-data.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  public logoPath: string = 'assets/logo.png';
  public routerLinkText: string = '/home';

  public hamburgerMenuState: string = 'closed';
  public userPanelData: UserPanelData = {
    imgAdress: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    buttonText: 'Logut',
    matIcon: 'arrow_right_alt',
    matTooltipText: 'Logged in as:',
    routerLinkTextImg: '/your-profile',
    routerLinkTextButton: 'login',
  };
  private _subs = new Subscription();

  constructor(private _elementRef: ElementRef) {}

  public ngOnInit(): void {
    this._trackScrolling();
  }

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (
      this.hamburgerMenuState === 'open' &&
      !this._elementRef.nativeElement.contains(event.target)
    ) {
      this.hamburgerMenuState = 'closed';
    }
  }

  public openHamburgerNav(): void {
    this.hamburgerMenuState =
      this.hamburgerMenuState === 'closed' ? 'open' : 'closed';
  }

  private _trackScrolling() {
    this._subs.add(
      fromEvent(window, 'scroll').subscribe(() => {
        if (this.hamburgerMenuState === 'open') {
          this.hamburgerMenuState = 'closed';
        }
      })
    );
  }
}
