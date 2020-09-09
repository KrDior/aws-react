import { GET_SEARCHBY } from '../action-types/constants';
import { UserActionTypes, ISearchBy } from '../../types/store';

const initialState: ISearchBy = {} as ISearchBy;

const searchReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case GET_SEARCHBY:
      return action.searchParam;
    default:
      return state;
  }
};

export default searchReducer;
