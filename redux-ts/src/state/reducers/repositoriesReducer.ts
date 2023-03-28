import { ActionType } from '../action-types';
import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  searchRepositoriesAction,
  searchRepositoriesSuccessAction,
  searchRepositoriesErrorAction,
} from '../actions';

// const reducer = (
//   state: RepositoriesState,
//   action: Action
// ): RepositoriesState => {
//   switch (action.type) {
//     case ActionType.SEARCH_REPOSITORIES:
//       return { loading: true, error: null, data: [] };
//     case ActionType.SEARCH_REPOSITORIES_SUCCESS:
//       return { loading: false, error: null, data: action.payload };
//     case ActionType.SEARCH_REPOSITORIES_ERROR:
//       return { loading: false, error: action.payload, data: [] };
//     default:
//       return state;
//   }
// };

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export const initialState = {
  loading: false,
  error: null,
  data: [],
} as RepositoriesState;

export const repositoriesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(searchRepositoriesAction, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    })
    .addCase(searchRepositoriesSuccessAction, (state, action: any) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    })
    .addCase(searchRepositoriesErrorAction, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    });
});

export default repositoriesReducer;
