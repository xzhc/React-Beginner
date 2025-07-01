import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { postListRoute } from "./pages/PostList";
import { postRoute } from "./pages/Post";
import { userListRoute } from "./pages/UserList";
import { userRoute } from "./pages/User";
import { todoListRoute } from "./pages/TodoList";
import { newPostRoute } from "./pages/NewPost";
import { editPostRoute } from "./pages/EditPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/posts" />,
          },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postListRoute,
              },
              {
                path: ":postId",
                ...postRoute,
              },
              {
                path: "new",
                ...newPostRoute,
              },
              {
                path: ":postId/edit",
                ...editPostRoute,
              },
            ],
          },
          {
            path: "users",
            children: [
              {
                index: true,
                ...userListRoute,
              },
              {
                path: ":userId",
                ...userRoute,
              },
            ],
          },
          {
            path: "todos",
            children: [
              {
                index: true,
                ...todoListRoute,
              },
            ],
          },
          {
            path: "*",
            element: <h1>404 - Page Not Found</h1>,
          },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
