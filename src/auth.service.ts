import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedInAction, LogoutAction } from './app/reducers/loggedin.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginStatus$ = new BehaviorSubject(false);
store: any;

  constructor() {}

  login(): void {
    this.loginStatus$.next(true);
  }

  logout(): void {
    this.loginStatus$.next(false);
  }

  loginStatus(): Observable<boolean> {
    return this.loginStatus$.asObservable();
  }

  logged() {
    this.store.dispatch(new LoggedInAction(true));
  }

  logoutNew() {
    this.store.dispatch(new LogoutAction(false));
  }

}
