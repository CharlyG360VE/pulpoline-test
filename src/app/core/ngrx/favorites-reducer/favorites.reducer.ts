import { Action, createReducer, on } from "@ngrx/store";
import { IFavoritesInitialState } from "./interfaces/favorites.interface";
import * as action from './actions/favorites.action';

const initialState: IFavoritesInitialState = {
  favorites: []
};

const _favoritesReducer = createReducer<IFavoritesInitialState, Action>(
  initialState,
  on(action.togglefavorite, (state, { favorite }) => (
    {
      ...state,
      favorites: state.favorites.find(fav => fav.id === favorite.id) ?
        state.favorites.filter(fav => fav.id !== favorite.id) :
        [...state.favorites, favorite]
    }
  ))
);

export const favoritesReducer = (state: IFavoritesInitialState | undefined, action: Action) => _favoritesReducer(state, action);
