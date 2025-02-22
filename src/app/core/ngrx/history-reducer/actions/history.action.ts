import { createAction, props } from "@ngrx/store";

const ACTION_NAME = '[HISTORY REDUCER]';

export const toggleQuerySearch = createAction(`${ACTION_NAME} Toggle query search`, props<{ query: string }>());