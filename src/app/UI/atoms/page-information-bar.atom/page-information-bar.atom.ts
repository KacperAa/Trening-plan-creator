import { ViewportRuler } from '@angular/cdk/overlay';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'ui-page-information-bar[header]',
  templateUrl: './page-information-bar.atom.html',
  styleUrls: ['./page-information-bar.atom.scss'],
})
export class PageInformationBarComponent implements OnInit, OnDestroy {
  @Input()
  public header!: string;
  public isSmallDevice: boolean = this._checkSmallDevice();
  private _subs: Subscription = new Subscription();

  constructor(private _viewportRuler: ViewportRuler) {}

  public ngOnInit(): void {
    this._trackWindowWidth();
  }

  public ngOnDestroy(): void {
    this._subs.unsubscribe();
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

  private _checkSmallDevice(): boolean {
    const windowWidth = this._viewportRuler.getViewportSize().width;
    return windowWidth < 600;
  }
}
