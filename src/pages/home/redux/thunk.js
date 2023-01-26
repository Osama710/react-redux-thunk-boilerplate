import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../../../utils/helperFunctions";

import {
  getUsers as getUsersAPI,
  getUserSingle as getUserSingleAPI,
  updateUser as updateUserAPI,
  deleteUser as deleteUserAPI,
  postUsers as postUsersAPI,
} from "./service";

export const getUsers = createAsyncThunk(
  "get/Users",
  async () => {
    const token = getFromLocalStorage("APP_TOKEN");
    const params = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await getUsersAPI(params);
    return response.data;
  }
);

export const getUserSingle = createAsyncThunk(
  "get/UserSingle",
  async (id) => {
    const token = getFromLocalStorage("APP_TOKEN");
    const params = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await getUserSingleAPI(id,params);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "update/User",
  async (id, payload) => {
    const token = getFromLocalStorage("APP_TOKEN");
    const params = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await updateUserAPI(id, payload,params);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "delete/User",
  async (id) => {
    const token = getFromLocalStorage("APP_TOKEN");
    const params = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await deleteUserAPI(id,params);
    return response.data;
  }
);

export const postUsers = createAsyncThunk(
  "post/Users",
  async (payload) => {
    const token = getFromLocalStorage("APP_TOKEN");
    const params = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const response = await postUsersAPI(payload, params);
    return response.data;
  }
);