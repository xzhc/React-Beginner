import { baseApi } from "./base";

export function getComments(options, postId) {
  return baseApi
    .get(`posts/${postId}/comments`, options)
    .then((res) => res.data);
}
