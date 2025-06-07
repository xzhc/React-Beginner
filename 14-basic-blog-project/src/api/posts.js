import { baseApi } from "./base";

export function getPosts(options) {
  return baseApi.get("posts", options).then((res) => res.data);
}

export function getPost(options, postId) {
  return baseApi.get(`posts/${postId}`, options).then((res) => res.data);
}
