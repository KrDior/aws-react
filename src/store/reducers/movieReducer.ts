/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  FAILURE_MOVIE_REQUEST,
  GET_SORTBY_RATING,
  GET_SORTBY_RELEASE,
} from '../action-types/constants';
import { ratingSortHelper, sortByReleaseHelper } from '../../utils/helpers';
import { MoviesActionTypes, SortActionTypes, Item, IMoviesInit, IMovies } from '../../types/store';

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    movies: [],
  },
  action: MoviesActionTypes,
) => {
  switch (action.type) {
    case FAILURE_MOVIE_REQUEST:
      return { ...state, didInvalidate: true };
    case REQUEST_MOVIE:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_MOVIE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        movies: action.movies,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

const initialState: IMoviesInit | IMovies = {} as IMoviesInit;

const movieReducer = (state = initialState, action: MoviesActionTypes | SortActionTypes) => {
  switch (action.type) {
    case FAILURE_MOVIE_REQUEST:
    case RECEIVE_MOVIE:
    case REQUEST_MOVIE:
      return posts(state, action);
    case GET_SORTBY_RATING:
      return {
        ...state,
        isFetching: false,
        movies: changeMoviesStateOrder(action.movies, 'vote_count'),
      };
    case GET_SORTBY_RELEASE:
      return {
        ...state,
        isFetching: false,
        movies: changeMoviesStateOrder(action.movies, 'release_date'),
      };
    default:
      return state;
  }
};

function changeMoviesStateOrder(data: IMovies, field: string) {
  const copy = { ...data };
  let { movies: { Items } } = copy;
  if (field === 'vote_count') {
    Items = ratingSortHelper(Items as any, 'vote_count') as Array<Item>;
  } else if (field === 'release_date') {
    Items = sortByReleaseHelper(Items as any, 'release_date') as Array<Item>;
  }

  return copy.movies;
}

export default movieReducer;
