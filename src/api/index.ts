import axios from 'axios';
import {Platform} from 'react-native';
import {getVersion} from 'react-native-device-info';
import {urls} from '../config';
import {store} from '../redux/store';
import {setLoading} from '../redux/commonSlice/appSlice';

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
    store.dispatch(setLoading(true));
    const token = store.getState().userState.token;
    if (token) {
      config.headers.Authorization = token;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoading(false));
    return response;
  },
  function (error) {
    // Toast.show({
    //   type: 'error',
    //   text1: strings.error,
    //   text2: response.data?.meta?.message,
    // });
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  },
);

export default api;
