import { ActionReducerMap } from "@ngrx/store";
import { IFavoritesInitialState } from "./favorites-reducer/interfaces/favorites.interface";
import { favoritesReducer } from "./favorites-reducer/favorites.reducer";
import { IHistoryInitialState } from "./history-reducer/interfaces/history.interface";
import { historyReducer } from "./history-reducer/history.reducer";

export interface AppState {
  favorites: IFavoritesInitialState;
  history: IHistoryInitialState;
}

export const APP_REDUCER: ActionReducerMap<AppState> = {
  favorites: favoritesReducer,
  history: historyReducer
};