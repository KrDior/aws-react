import {
  REQUEST_MOVIE_BY_ID,
  RECEIVE_MOVIE_BY_ID,
  FAILURE_MOVIE_REQUEST_BY_ID,
} from '../action-types/constants';
import { MovieActionTypes, IMovieID, IMovieIDInit } from '../../types/store';

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    movie: [],
  },
  action: MovieActionTypes,
) => {
  switch (action.type) {
    case FAILURE_MOVIE_REQUEST_BY_ID:
      return { ...state, didInvalidate: true };
    case REQUEST_MOVIE_BY_ID:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_MOVIE_BY_ID:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        movie: action.movie,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

const initialState: IMovieID | IMovieIDInit = {} as IMovieIDInit;

const movieByIdReducer = (state = initialState, action: MovieActionTypes) => {
  switch (action.type) {
    case FAILURE_MOVIE_REQUEST_BY_ID:
    case RECEIVE_MOVIE_BY_ID:
    case REQUEST_MOVIE_BY_ID:
      return posts(state, action);
    default:
      return state;
  }
};

export default movieByIdReducer;
