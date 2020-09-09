import { GET_SORTBY } from '../action-types/constants';
import { ISortBy, UserActionTypes } from '../../types/store';

const initialState: ISortBy = {} as ISortBy;

const sortReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case GET_SORTBY:
      return action.sortParam;
    default:
      return state;
  }
};

export default sortReducer;
