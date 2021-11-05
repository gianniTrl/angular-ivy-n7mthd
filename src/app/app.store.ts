import { MetaReducer } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';
import { balanceReducer } from './reducers/balance.reducer';

export interface AppState {
  balance: number;
}

export const reducers: ActionReducerMap<AppState> = {
  balance: balanceReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
