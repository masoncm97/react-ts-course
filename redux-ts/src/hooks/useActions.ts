import { RootState } from '../state';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const useActions = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  // Returns an object like: { searchRepositories: dispatch(searchRepositories)}
  return bindActionCreators(actionCreators, dispatch);
};
