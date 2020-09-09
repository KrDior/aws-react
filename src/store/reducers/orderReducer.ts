import { ADD_TO_BUCKET, RECEIVE_ORDERS, DELETE_ORDER, CHANGE_ORDER, FAILURE_ORDERS_REQUEST } from '../action-types/constants';
import { OrderActionTypes, IOrderBase } from '../../types/store';

const initialState: IOrderBase  = {
  ordersData: [],
  bucketData: []
} as IOrderBase;

const orderReducer = (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case ADD_TO_BUCKET:
      return {
        ...state,
        bucketData: [action.item, ...state.bucketData],
      };
    case RECEIVE_ORDERS:
      return {
        ...state,
        ordersData: action.orders,
      };
    case DELETE_ORDER:
      return {
        ...state,
        item: action.item,
      };
    case CHANGE_ORDER:
      return {
        ...state,
        item: action.item,
      };
    case FAILURE_ORDERS_REQUEST:
      return {
        ...state,
        params: action.item,
      };
    default:
      return state;
  }
};

export default orderReducer;
