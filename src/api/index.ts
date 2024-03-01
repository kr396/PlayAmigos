import axios from 'axios';
import {Platform} from 'react-native';
import {getVersion} from 'react-native-device-info';
import {urls} from '../config';

const api = axios.create({
  baseURL: urls.baseURL + 'api/v1/',
  timeout: 60 * 1000,
  headers: {
    app_version: getVersion(),
    os: Platform.OS,
  },
});
// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default api;
