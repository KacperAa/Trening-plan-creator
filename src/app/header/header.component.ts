import { ViewportRuler } from '@angular/cdk/scrolling';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { UserPanelData } from 'src/app/Interfaces/user-panel-data.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  public logoPath: string = 'assets/logo.png';
  public isSmallDevice: boolean = this._checkSmallDevice();
  public hamburgerMenuState: string = 'closed';
  public userPanelData: UserPanelData = {
    imgAdress: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    buttonText: 'Logut',
    matIcon: 'arrow_right_alt',
    matTooltipText: 'Logged in as:',
  };
  private _subs = new Subscription();

  constructor(
    private _viewportRuler: ViewportRuler,
    private _elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    this._trackWindowWidth();
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

  private _checkSmallDevice(): boolean {
    const windowWidth = this._viewportRuler.getViewportSize().width;
    return windowWidth < 820;
  }

  private _trackWindowWidth(): void {
    this._subs.add(
      fromEvent(window, 'resize')
        .pipe(debounceTime(0))
        .subscribe(() => {
          this.isSmallDevice = this._checkSmallDevice();
        })
    );
  }
}
