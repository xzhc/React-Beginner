import { baseApi } from "./base";

export function getUser(userId, options) {
  return baseApi.get(`users/${userId}`, options).then((res) => res.data);
}

export function getUsers(options) {
  return baseApi.get("users", options).then((res) => res.data);
}
