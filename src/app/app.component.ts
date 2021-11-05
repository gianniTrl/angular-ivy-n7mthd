import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.store';
import { DepositAction } from './reducers/balance.reducer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Pacho ';
  balance$ = this.store.select('balance');

  constructor(private store: Store<AppState>) {}

  deposit() {
    this.store.dispatch(new DepositAction(10));
  }
}
