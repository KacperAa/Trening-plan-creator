import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  public logoPath: string = 'assets/logo.png';
  public isSmallDevice: boolean = this._checkSmallDevice();
  public hamburgerMenuState: string = 'closed';
  private _subs = new Subscription();

  constructor(
    private _viewportRuler: ViewportRuler,
    private _elementRef: ElementRef
  ) {
    this._trackWindowWidth();
  }

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public openHamburgerNav(): void {
    this.hamburgerMenuState =
      this.hamburgerMenuState === 'closed' ? 'open' : 'closed';
  }

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    if (
      this.hamburgerMenuState === 'open' &&
      !this._elementRef.nativeElement.contains(event.target)
    ) {
      this.hamburgerMenuState = 'closed';
    }
  }

  private _checkSmallDevice(): boolean {
    const windowWidth = this._viewportRuler.getViewportSize().width;
    return windowWidth < 820;
  }

  private _trackWindowWidth(): void {
    this._subs.add(
      fromEvent(window, 'resize').subscribe(() => {
        this.isSmallDevice = this._checkSmallDevice();
      })
    );
  }
}
