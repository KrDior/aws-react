/* eslint-disable no-console */
import axios from 'axios';
import config from '../config/config';

const { API_AUTH_PATH, MOCKED_TOKEN } = config;

export interface IResponse {
  authStatus?: boolean;
}

const handleAuthStatus = {
  isAuthenticated: false,
  async authenticate() {
    handleAuthStatus.isAuthenticated = await fetchAuthStatus(MOCKED_TOKEN) || false;
  },
  signout() {
    handleAuthStatus.isAuthenticated = false;
  },
};

async function fetchAuthStatus(token: string) {
  try {
    const response = await axios.get(API_AUTH_PATH, {
      headers: {
        'Authorization': token
      }
    });
    const { data: { authStatus } } = response;
    return authStatus;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default handleAuthStatus;
