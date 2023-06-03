import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleAndAutocomplete } from 'src/app/Interfaces/title-and-autocomplete.interface';

@Component({
  selector: 'app-weekly-amount-increase[data]',
  templateUrl: './weekly-amount-increase.component.html',
  styleUrls: ['./weekly-amount-increase.component.scss'],
})
export class WeeklyAmountIncreaseComponent {
  @Input()
  public data!: TitleAndAutocomplete[];
  @Output()
  public back: EventEmitter<never> = new EventEmitter<never>();

  public isNotLastAutocomplete(autocomplete: TitleAndAutocomplete): boolean {
    return this.data.indexOf(autocomplete) !== this.data.length - 1;
  }
}
