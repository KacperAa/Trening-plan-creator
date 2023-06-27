import { ViewportRuler } from '@angular/cdk/scrolling';
import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appShowIfWindowWidth]',
})
export class ShowIfWindowWidthDirective implements OnInit, OnDestroy {
  @Input()
  public windowWidthToRemoveElement: number = 820;
  private _subs: Subscription = new Subscription();
  private _isElementCreated: boolean = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _vcRef: ViewContainerRef,
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
      fromEvent(window, 'resize').subscribe(() => {
        this._shouldRemoveElement();
      })
    );
  }

  private _shouldRemoveElement(): void {
    if (!this._checkSmallDevice() && this._isElementCreated === false) {
      this._vcRef.createEmbeddedView(this._templateRef);
      this._isElementCreated = true;
    } else {
      this._vcRef.clear();
      this._isElementCreated = false;
    }
  }
  private _checkSmallDevice(): boolean {
    const windowWidth = this._viewportRuler.getViewportSize().width;
    return windowWidth < this.windowWidthToRemoveElement;
  }

  private _checkActualElementStatus(): void {
    this._subs.add(
      fromEvent(window, 'DOMContentLoaded').subscribe(() => {
        this._shouldRemoveElement();
      })
    );
  }
}
