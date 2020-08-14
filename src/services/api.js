import axios from 'axios';

import config from '../config';

const URL_VIDEOS = `${config.URL_API}/videos`;

const api = axios.create({
  // baseURL: 'http://localhost:3100',
  baseURL: URL_VIDEOS,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});


export default api;
