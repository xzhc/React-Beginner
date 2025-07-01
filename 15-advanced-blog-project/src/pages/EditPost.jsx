import { getPost, updatePost } from "../api/posts";
import { getUsers } from "../api/users";
import { PostForm, postFormValidator } from "../components/PostForm";
import {
  redirect,
  useLoaderData,
  useNavigation,
  useActionData,
} from "react-router";

function EditPost() {
  const { post, users } = useLoaderData();
  const { state } = useNavigation();
  const errors = useActionData();
  const isSubmitting = state === "submitting";
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm
        users={users}
        isSubmitting={isSubmitting}
        errors={errors}
        defaultValues={post}
      />
    </>
  );
}

async function loader({ request: { signal }, params: { postId } }) {
  const post = getPost({ signal }, postId);
  const users = getUsers({ signal });

  return { post: await post, users: await users };
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = postFormValidator({ title, userId, body });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${postId}`);
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
