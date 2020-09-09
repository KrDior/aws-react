/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import config from '../../config/config';
import {
  receiveOrders, changeOrder, failuredOrderRequest, deleteOrder, createOrder
} from '../actions/actionCreator';
import { IOrder, IOrderResponce } from '../../types/store';

const {
  API_ORDER_PATH,
  ORDERS_API_PATH
} = config;


function fetchOrder(params?: IOrder, type?: string) {
  return async (dispatch: React.Dispatch<any>) => {
    try {
      if (type === 'post') {
        const result: IOrderResponce = await axios.post(`${API_ORDER_PATH}${ORDERS_API_PATH}`, params);
        dispatch(createOrder(result));
      } else if (type === 'update') {
        const result: IOrderResponce = await axios.put(`${API_ORDER_PATH}${ORDERS_API_PATH}`, params);
        dispatch(changeOrder(result));
      } else if (type === 'delete') {
        const result: IOrderResponce = await axios.delete(`${API_ORDER_PATH}${ORDERS_API_PATH}`, { data: params });
        dispatch(deleteOrder(result));
      } else {
        const result: IOrderResponce = await axios.get(`${API_ORDER_PATH}${ORDERS_API_PATH}`);
        dispatch(receiveOrders(result.data));
      }
    } catch (error) {
      dispatch(failuredOrderRequest(error));
    }
  };
}

export default function handleOrderApi(params?: IOrder, type?: string) {
  return (dispatch: React.Dispatch<any>) => {
    return dispatch(fetchOrder(params, type));
  };
}
