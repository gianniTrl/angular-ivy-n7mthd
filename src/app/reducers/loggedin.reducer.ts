import { Action } from '@ngrx/store';

export function isLoggedReducer(state = false, action: Action): boolean {
  switch (action.type) {
    case '[State logged] Logged':
      const logged = action as LoggedInAction;
      return true;

    case '[State logged] Logout':
      const withdrawAction = action as LogoutAction;
      return false;

    default:
      return state;
  }
}

export class LoggedInAction implements Action {
  type = '[State logged] Logged';

  constructor(public stato: boolean) {}
}

export class LogoutAction implements Action {
  type = '[State logged] Logout';

  constructor(public stato: boolean) {}
}
