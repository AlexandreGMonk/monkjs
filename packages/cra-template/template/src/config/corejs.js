import { config as corejs } from '@monkvision/corejs';

export const axiosConfig = {
  baseURL: `https://${process.env.REACT_APP_API_DOMAIN}`,
  headers: { 'Access-Control-Allow-Origin': '*' },
};

export const authConfig = {
  domain: process.env.REACT_APP_AUTH_DOMAIN,
  audience: process.env.REACT_APP_AUTH_AUDIENCE,
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
};

corejs.axiosConfig = axiosConfig;
corejs.authConfig = authConfig;
