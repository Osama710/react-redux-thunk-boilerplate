import axios from "axios";
import { interceptor } from "./interceptor";

console.log(process.env.REACT_APP_BASE_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // timeout: 60000,
  // withCredentials: true
  headers: {},
});

//call axios interceptor
interceptor(instance);

// axios.defaults.headers.common = { Authorization: `bearer ${token}` };
const request = async ({ method, url, data, headers, skipAuth }) => {

  const params = {
    headers: { ...headers },
  };


  if (method === "delete") {
    data = params;
  }

  if(method === "get"){
    data = params
  }

  const promise = instance[method](url, data, params);
  try {
    const response = await promise;
    const payload = response.data;
    if (headers) {
      return {
        data: payload,
        headers: response.headers,
      };
    }
    return payload;
  } catch (err) {
    console.log(err, "err");
  }
};

// Response interceptor for API calls
instance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  // const originalRequest = error.config;
  // if (error.response.status === 401 && !originalRequest._retry) {
  //   await asynchronouslyRemoveFromLocal("APP_TOKEN");
  //   await asynchronouslyRemoveFromLocal("USER_ID");
  //   const dispatch = useAppDispatch();
  //   dispatch(SelectAuth(null));
  // }
  return Promise.reject(error);
});

export const get = (url, params) => request({ method: "get", url, ...params });
export const post = (url, data, params) =>
  request({ method: "post", url, data, ...params });
export const put = (url, data, params) =>
  request({ method: "put", url, data, ...params });
export const del = (url, params) => request({ method: "delete", url, ...params });
export const patch = (url, data, params) =>
  request({ method: "patch", url, data, ...params });
