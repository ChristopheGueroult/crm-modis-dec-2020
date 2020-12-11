import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {
  }
  ngOnChanges(): void {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
    console.log(this.appState);

  }


}

// generer state-canceled => appState vaut CANCELED
// generer state-option => appState vaut OPTION
// generer state-condirmed => appState vaut CONFIRMED
// Binder ce string avec la propriété class du host element td
