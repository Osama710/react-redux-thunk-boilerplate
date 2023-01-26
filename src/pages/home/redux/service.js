import { del, get, post, put } from "../../../utils/httpService";

const SERVICE_URLS = {
  getUsers: () => `/users`,
  getUserSingle: (id) => `/users/${id}`,
  updateUser: (id) => `/users/${id}`,
  deleteUser: (id) => `/users/${id}`,
  postUsers: () => `/users`,
};

export const getUsers = (params) => {
  return get(SERVICE_URLS.getUsers(), params);
};

export const getUserSingle = (id, params) => {
  return get(SERVICE_URLS.getUserSingle(id), params);
};

export const updateUser = (id, body, params) => {
  return put(SERVICE_URLS.updateUser(id), body, params);
};

export const deleteUser = (id, params) => {
  return del(SERVICE_URLS.deleteUser(id), params);
};

export const postUsers = (body, params) => {
  return post(SERVICE_URLS.postUsers(), body, params);
};