import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { PayloadAction, AnyAction } from '@reduxjs/toolkit';
import {
  searchRepositoriesAction,
  searchRepositoriesSuccessAction,
  searchRepositoriesErrorAction,
} from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(searchRepositoriesAction());
    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch(searchRepositoriesSuccessAction(names));
    } catch (err: any) {
      dispatch(searchRepositoriesErrorAction(err.message));
    }
  };
};
