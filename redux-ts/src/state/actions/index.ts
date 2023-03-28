import { ActionType } from '../action-types';
import { createAction } from '@reduxjs/toolkit';
// interface SearchRepositoriesAction {
//   type: ActionType.SEARCH_REPOSITORIES;
// }

// interface SearchRepositoriesSuccessAction {
//   type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
//   payload: string[];
// }

// interface SearchRepositoriesErrorAction {
//   type: ActionType.SEARCH_REPOSITORIES_ERROR;
//   payload: string;
// }

export const searchRepositoriesAction = createAction(
  ActionType.SEARCH_REPOSITORIES
);

export const searchRepositoriesSuccessAction = createAction<string[]>(
  ActionType.SEARCH_REPOSITORIES_SUCCESS
);

export const searchRepositoriesErrorAction = createAction<string>(
  ActionType.SEARCH_REPOSITORIES_ERROR
);

// export type Action =
//   | SearchRepositoriesAction
//   | SearchRepositoriesErrorAction
//   | SearchRepositoriesSuccessAction;
