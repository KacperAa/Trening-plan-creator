import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';

@Component({
  selector: 'ui-autocomplete[keyOptionsFound]',
  templateUrl: './autocomplete.atom.html',
  styleUrls: ['./autocomplete.atom.scss'],
})
export class AutocompleteComponent implements AfterViewInit {
  @ViewChild('auto') autocompleteRef!: MatAutocomplete;
  @Input()
  public keyOptionsFound!: Observable<string[]> | null;
  @Output()
  public emitAutocompleteRef: EventEmitter<MatAutocomplete> =
    new EventEmitter<MatAutocomplete>();

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.emitAutocompleteRef.emit(this.autocompleteRef);
    }, 0);
  }
}
