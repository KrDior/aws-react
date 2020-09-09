/* eslint-disable no-console */

import axios from 'axios';
import { Item } from '../types/store';
import config from '../config/config';


const { API_PRODUCT_PATH } = config;

export default async function fetchCreateProduct(item: Item) {
  console.log('fetchCreateProduct', item);
  try {
    await axios.post(API_PRODUCT_PATH, item);
  } catch (error) {
    console.error(error);
  }
}
