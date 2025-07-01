import { getUser } from "../api/users";
import { useLoaderData } from "react-router-dom";

function loader({ request: { signal } }) {
  return getUser({ signal });
}

function UserList() {
  const users = useLoaderData();
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => {
          return (
            <div key={user.id} className="card">
              <div className="card-header">
                <Link to={`/users/${user.id}`} className="link">
                  {user.name}
                </Link>
              </div>
              <div className="card-body">
                <div>{user.company.name}</div>
                <div>{user.website}</div>
                <div>{user.email}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={user.id.toString()}>
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
