/* eslint-disable @typescript-eslint/naming-convention */
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
  CREATE_ORDER
} from '../store/action-types/constants';

// Actions

export interface IGET_SORTBY {
  type: typeof GET_SORTBY,
  sortParam: string,
}

export interface IGET_SEARCHBY {
  type: typeof GET_SEARCHBY,
  searchParam: string,
}

export interface IGET_MOVIE_TITLE {
  type: typeof GET_MOVIE_TITLE,
  movie: ResponseApiData,
}

export interface IGET_SAMEGENRE {
  type: typeof GET_SAMEGENRE,
  movie: ResponseApiData,
}

export interface IREQUEST_MOVIE {
  type: typeof REQUEST_MOVIE,
  searchParams: string,
}

export interface IRECEIVE_MOVIE {
  type: typeof RECEIVE_MOVIE,
  searchParams: string,
  movies: ResponseApiData,
  receivedAt: number,
}

export interface IFAILURE_MOVIE_REQUEST {
  type: typeof FAILURE_MOVIE_REQUEST,
  searchParams: string,
}

export interface IREQUEST_MOVIE_BY_ID {
  type: typeof REQUEST_MOVIE_BY_ID,
  searchParams: string,
}

export interface IRECEIVE_MOVIE_BY_ID {
  type: typeof RECEIVE_MOVIE_BY_ID,
  searchParams: string,
  movie: ResponseApiData,
  receivedAt: number,
}

export interface IFAILURE_MOVIE_REQUEST_BY_ID {
  type: typeof FAILURE_MOVIE_REQUEST_BY_ID,
  searchParams: string,
}

export interface IGET_SORTBY_RATING {
  type: typeof GET_SORTBY_RATING,
  movies: any,
}

export interface IGET_SORTBY_RELEASE {
  type: typeof GET_SORTBY_RELEASE,
  movies: any,
}

export type MoviesActionTypes = IFAILURE_MOVIE_REQUEST | IRECEIVE_MOVIE | IREQUEST_MOVIE;

export type MovieActionTypes = IFAILURE_MOVIE_REQUEST_BY_ID | IRECEIVE_MOVIE_BY_ID | IREQUEST_MOVIE_BY_ID;

export type SortActionTypes = IGET_SORTBY_RATING | IGET_SORTBY_RELEASE;

export type UserActionTypes = IGET_SORTBY | IGET_SEARCHBY | IGET_MOVIE_TITLE | IGET_SAMEGENRE;


// API

export interface IResponse {
  data: ResponseApiData;
  status: number;
  statusText: string;
  headers: Headers;
  config: any;
  request?: any;
}

export interface ResponseApiData {
  Items?: Array<Item>;
  Count?: number;
  ScannedCount?: number;
  LastEvaluatedKey?: {
    id?: string;
  };
  dbSize?: number;
}

export interface Item {
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
  genres: Array<string>,
  vote_count: string,
  tagline: string,
  vote_average: string,
  overview: string,
  budget: string,
  revenue: string,
  runtime: string,
  availability: boolean,
  price: string,
}

export interface IMovieBase {
  isFetching: boolean;
  didInvalidate: boolean;
  lastUpdated: string;
}

export interface IMovies extends IMovieBase {
  movies: ResponseApiData;
}

export interface IMoviesInit extends IMovieBase {
  movies: never[];
}

export interface IMovieID extends IMovieBase {
  movie: ResponseApiData;
}

export interface IMovieIDInit extends IMovieBase {
  movie: never[];
}

export type MovieTypes = IMovieIDInit | IMovieID | IMoviesInit | IMovies;

export interface ISortBy {
  sortBy: 'rating' | 'release';
}

export interface ISearchBy {
  searchBy: string;
}

export interface RootState extends Item {
  movies: any,
  movieId: any,
  sortBy: string | {},
  searchBy: string | {},
  order: any;
}

export interface IMovieCard {
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
  genres: Array<string>,
  vote_count: string,
}

// orders API

export interface IOrder {
  customerInfo?: any,
  itemsData?: any,
  id?: string,
  headers?: any,
  crossdomain?: boolean,
  orderStatus?: string
}

export interface IOrderBase {
  ordersData: Array<IOrder>;
  bucketData: Array[IBucketItem];
}

export interface IOrderResponce {
  data: any;
  status: number;
  statusText: string;
  headers: Headers;
  config: any;
  request?: any;
}

export interface IBucketItem {
  id?: string,
  title?: string,
  poster_path?: string,
  genres?: Array<string> | string,
  availability?: boolean,
  price?: string | number,
  overview?: string,
}

export interface IBucketOrder {
  customerInfo: any,
  order: Array<IBucketItem> | IBucketItem,
  id: string
}

export interface IADD_TO_BUCKET {
  type: typeof ADD_TO_BUCKET
  item: IBucketItem,
  orders?:  IOrder | Array<IOrder> | IOrderResponce
}

export interface RECEIVE_ORDERS {
  type: typeof RECEIVE_ORDERS,
  orders: IOrder | Array<IOrder> | IOrderResponce,
  item?: any,
}

export interface ICREATE_ORDER {
  type: typeof CREATE_ORDER,
  orders: IOrder | Array<IOrder> | IOrderResponce,
  item?: any,
  orders?: any
}

export interface DELETE_ORDER {
  type: typeof DELETE_ORDER,
  item: IOrder,
  orders?:  IOrder | Array<IOrder> | IOrderResponce,
}

export interface CHANGE_ORDER {
  type: typeof CHANGE_ORDER,
  item: IOrder,
  orders?:  IOrder | Array<IOrder> | IOrderResponce,
}

export interface IFAILURE_ORDERS_REQUEST {
  type: typeof CFAILURE_ORDERS_REQUEST,
  params: IOrder,
  item?: any
  orders?:  IOrder | Array<IOrder> | IOrderResponce,
}

export type OrderActionTypes = IADD_TO_BUCKET | RECEIVE_ORDERS | DELETE_ORDER | CHANGE_ORDER |
IFAILURE_ORDERS_REQUEST | ICREATE_ORDER;
