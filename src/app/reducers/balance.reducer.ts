import { Action } from '@ngrx/store';

export function balanceReducer(state = 0, action: Action): number {
  switch (action.type) {
    case '[Account Page] Deposit':
      const depositAction = action as DepositAction;
      return state + depositAction.amount;

    case '[Account Page] Withdraw':
      const withdrawAction = action as WithdrawAction;
      return state - withdrawAction.amount;

    default:
      return state;
  }
}

export class DepositAction implements Action {
  type = '[Account Page] Deposit';

  constructor(public amount: number) {}
}

export class WithdrawAction implements Action {
  type = '[Account Page] Withdraw';

  constructor(public amount: number) {}
}
