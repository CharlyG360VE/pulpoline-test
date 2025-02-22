import { Action, createReducer, on } from "@ngrx/store";
import { IHistoryInitialState } from "./interfaces/history.interface";
import * as action from './actions/history.action';

const initialState: IHistoryInitialState = {
  queries: []
};

const _historyReducer = createReducer<IHistoryInitialState, Action>(
  initialState,
  on(action.toggleQuerySearch, (state, { query }) => (
    {
      ...state,
      queries: state.queries.find(q => q === query) ?
        [...state.queries] :
        [...state.queries, query]
    }
  ))
);

export const historyReducer = (state: IHistoryInitialState | undefined, action: Action) => _historyReducer(state, action);
