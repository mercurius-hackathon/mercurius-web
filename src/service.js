import axios from "axios";

// axios 配置
axios.defaults.timeout = 30000; // 超时时间 30s
axios.defaults.baseURL = "/"; // 基本URL

axios.interceptors.request.use(
  // Do something before request is sent
  config => {
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
