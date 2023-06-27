import { ViewportRuler } from '@angular/cdk/scrolling';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Directive({
  selector: '[appWindowSizeClass]',
})
export class TrackWinWidthDirective implements OnInit {
  @Input('appWindowSizeClass')
  public className: string = 'small-device';
  @Input()
  public windowWidthToAddClass: number = 820;

  private _subs: Subscription = new Subscription();

  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2,
    private _viewportRuler: ViewportRuler
  ) {}

  public ngOnInit(): void {
    this._trackWindowWidth();
    this._checkActualElementStatus();
  }

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private _trackWindowWidth(): void {
    this._subs.add(
      fromEvent(window, 'resize')
        .pipe(debounceTime(0))
        .subscribe(() => {
          this._addOrRemoveClass();
        })
    );
  }

  private _addOrRemoveClass(): void {
    if (this._checkSmallDevice()) {
      this._renderer.addClass(this._elRef.nativeElement, this.className);
    } else {
      this._renderer.removeClass(this._elRef.nativeElement, this.className);
    }
  }

  private _checkActualElementStatus(): void {
    this._subs.add(
      fromEvent(window, 'DOMContentLoaded').subscribe(() => {
        this._addOrRemoveClass();
      })
    );
  }

  private _checkSmallDevice(): boolean {
    const windowWidth = this._viewportRuler.getViewportSize().width;
    return windowWidth < this.windowWidthToAddClass;
  }
}
