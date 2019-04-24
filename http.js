import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.API_ENDPOINT
});

instance.interceptors.request.use(
  async function(config) {
    config.headers.authorization = await AsyncStorage.getItem('userToken');
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        redirectToLogin();
      } else if (error.response.status === 403) {
        redirectToUnauthorized();
      } else if (error.response.status === 403 && error.response.data.detail.match('CSRF Failed')) {
        // Redirect to login, to fix csrf token issues
        redirectToLogin(true);
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
    }
    console.error(error.config);
    return Promise.reject(error);
  }
);

export function get(url, config) {
  return instance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}

export function remove(url, config) {
  return instance.delete(url, config);
}

export function put(url, data, config) {
  return instance.put(url, data, config);
}

export function patch(url, data, config) {
  return instance.patch(url, data, config);
}

export function concurrentRequests(requestsArray) {
  return axios.all(requestsArray);
}
