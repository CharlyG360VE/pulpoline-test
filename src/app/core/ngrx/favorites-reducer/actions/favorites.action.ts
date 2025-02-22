import { IDropdown } from "@/interfaces/common.interface";
import { createAction, props } from "@ngrx/store";

const ACTION_NAME = '[FAVORITES REDUCER]';

export const togglefavorite = createAction(`${ACTION_NAME} Toggle favorites`, props<{ favorite: IDropdown }>());