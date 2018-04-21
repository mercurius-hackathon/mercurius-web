import axios from "axios";

// axios 配置
axios.defaults.timeout = 30000; // 超时时间 30s
axios.defaults.baseURL = ""; // 基本URL

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
    let receiveData = response.data;
    // 处理code为0的情况
    if (receiveData.code === 0 || receiveData.code === "0") {
      // 直接返回reponse中的data数据
      return response.data;
    } else {
      // 处理code不为0的情况
      let msg = receiveData.msg
        ? receiveData.msg
        : `服务器返回了个 ${receiveData.code} CODE`;
      if (process.env.NODE_ENV === "development") {
        console.log(msg, "error");
      }
      return response.data;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
