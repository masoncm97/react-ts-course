import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import repositoriesReducer from './reducers';

export const store = configureStore({ reducer: repositoriesReducer });
