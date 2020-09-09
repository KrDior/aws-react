import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';
import sortReducer from './sortReducer';
import movieByIdReducer from './movieByIdReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  movieId: movieByIdReducer,
  sortBy: sortReducer,
  searchBy: searchReducer,
  order: orderReducer,
});

export default rootReducer;
