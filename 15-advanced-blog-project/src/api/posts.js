import { baseApi } from "./base";

export function getPosts(options) {
  return baseApi.get("posts", options).then((res) => res.data);
}

export function getPost(options, postId) {
  return baseApi.get(`/posts/${postId}`, options).then((res) => res.data);
}

export function createPost(data, options) {
  return baseApi.post("posts", data, options).then((res) => res.data);
}

export function updatePost(postId, data, options) {
  return baseApi.put(`posts/${postId}`, data, options).then((res) => res.data);
}
