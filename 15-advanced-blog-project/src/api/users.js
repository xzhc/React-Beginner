import { baseApi } from "./base";

export function getUsers(options) {
  return baseApi.get("/users", options).then((res) => res.data);
}

export function getUser(options, userId) {
  return baseApi.get(`/users/${userId}`, options).then((res) => res.data);
}
