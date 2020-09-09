/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GET_SORTBY,
  GET_SEARCHBY,
  GET_MOVIE_TITLE,
  GET_SAMEGENRE,
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  FAILURE_MOVIE_REQUEST,
  REQUEST_MOVIE_BY_ID,
  RECEIVE_MOVIE_BY_ID,
  FAILURE_MOVIE_REQUEST_BY_ID,
  GET_SORTBY_RATING,
  GET_SORTBY_RELEASE,
  ADD_TO_BUCKET,
  RECEIVE_ORDERS,
  DELETE_ORDER,
  CHANGE_ORDER,
  CREATE_ORDER,
  FAILURE_ORDERS_REQUEST
} from '../action-types/constants';
import { MoviesActionTypes, MovieActionTypes, SortActionTypes, UserActionTypes, ResponseApiData, IMovies, IBucketItem, OrderActionTypes, IOrder } from '../../types/store';

export const failuredOrderRequest = (params: IOrder): OrderActionTypes => ({
  type: FAILURE_ORDERS_REQUEST,
  params,
});

export const addToBucket = (movieItem: IBucketItem): OrderActionTypes => ({
  type: ADD_TO_BUCKET,
  item: movieItem,
});

export const receiveOrders = (ordersItems: IOrder[]): OrderActionTypes => ({
  type: RECEIVE_ORDERS,
  orders: ordersItems,
});

export const createOrder = (orderItem: IOrder): OrderActionTypes => ({
  type: CREATE_ORDER,
  item: orderItem,
});

export const changeOrder = (orderItem: IOrder): OrderActionTypes => ({
  type: CHANGE_ORDER,
  item: orderItem,
});

export const deleteOrder = (orderItem: IOrder): OrderActionTypes => ({
  type: DELETE_ORDER,
  item: orderItem,
});

export const sortByRelease = (movieData: IMovies): SortActionTypes => ({
  type: GET_SORTBY_RELEASE,
  movies: movieData,
});

export const sortByRating = (movieData: IMovies): SortActionTypes => ({
  type: GET_SORTBY_RATING,
  movies: movieData,
});

export const requestMovie = (searchParams: string): MoviesActionTypes => ({
  type: REQUEST_MOVIE,
  searchParams,
});

export const receiveMovie = (searchParams: string, movieData: ResponseApiData): MoviesActionTypes => ({
  type: RECEIVE_MOVIE,
  searchParams,
  movies: movieData,
  receivedAt: Date.now(),
});

export const failuredMovieRequest = (searchParams: string): MoviesActionTypes => ({
  type: FAILURE_MOVIE_REQUEST,
  searchParams,
});

export const requestMovieById = (searchParams: string): MovieActionTypes => ({
  type: REQUEST_MOVIE_BY_ID,
  searchParams,
});

export const receiveMovieById = (searchParams: string, movieData: ResponseApiData): MovieActionTypes => ({
  type: RECEIVE_MOVIE_BY_ID,
  searchParams,
  movie: movieData,
  receivedAt: Date.now(),
});

export const failuredMovieRequestById = (searchParams: string): MovieActionTypes => ({
  type: FAILURE_MOVIE_REQUEST_BY_ID,
  searchParams,
});

export const getSortBy = (sortParam: string): UserActionTypes => ({
  type: GET_SORTBY,
  sortParam,
});

export const getSearchBy = (searchParam: string): UserActionTypes => ({
  type: GET_SEARCHBY,
  searchParam,
});

export const getMovieTitle = (movieData: ResponseApiData): UserActionTypes => ({
  type: GET_MOVIE_TITLE,
  movie: movieData,
});

export const getMovieGenre = (movieData: ResponseApiData): UserActionTypes => ({
  type: GET_SAMEGENRE,
  movie: movieData,
});
