/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import config from '../../config/config';
import {
  receiveMovie, requestMovie, failuredMovieRequest, receiveMovieById, requestMovieById
} from '../actions/actionCreator';
import { RootState, IResponse } from '../../types/store';
import { isEmpty } from '../../utils/helpers';

const {
  API_PATH,
  PRODUCTS_API_PATH,
  TITLE_API_PATH,
  GENRE_API_PATH
} = config;

function fetchMovie(params: string) {
  return async (dispatch: React.Dispatch<any>) => {
    const searchParams = params[0] === '?' ? params.slice(1) : params;
    try {
      const result: IResponse = await axios(`${API_PATH}${searchParams}`);
      const { data } = result;
      if (searchParams === PRODUCTS_API_PATH || searchParams.includes(TITLE_API_PATH)
      || searchParams.includes(GENRE_API_PATH)) {
        dispatch(requestMovie(searchParams));
        dispatch(receiveMovie(searchParams, data));
      } else {
        dispatch(requestMovieById(searchParams));
        dispatch(receiveMovieById(searchParams, data));
      }
    } catch (error) {
      dispatch(failuredMovieRequest(searchParams));
    }
  };
}

function shouldFetchMovie(state: RootState, searchParams: string, id?: string): boolean {
  const { movies, movieId } = state;
  if (isEmpty(movies) || (!movies.isFetching &&
    (searchParams.includes(GENRE_API_PATH) || searchParams.includes(TITLE_API_PATH)))) {
    return true;
  }
  if (isEmpty(movieId) || (id && searchParams.includes(id))) {
    return true;
  }
  if (movies.isFetching) {
    return false;
  }
  return movies.didInvalidate;
}

export default function fetchMovieIfNeeded(searchParams: string, id?: string) {
  return (dispatch: React.Dispatch<any>, getState: () => RootState) => {
    if (shouldFetchMovie(getState(), searchParams, id)) {
      return dispatch(fetchMovie(searchParams));
    }
    return Promise.resolve();
  };
}
