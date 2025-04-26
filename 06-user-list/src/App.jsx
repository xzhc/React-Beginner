import { useEffect, useState } from "react";
import { User } from "./User";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  useEffect(() => {
    setStatus("loading");
    setUsers([]);
    setError(null);

    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Status code: ${res.status}`);
      })
      .then((data) => {
        setUsers(data);
        setStatus("fetched");
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
        setError(err);
        setUsers([]);
        setStatus("error");
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>UserList</h1>
      {status === "loading" && <h2>Loading...</h2>}
      {status === "error" && (
        <>
          <h2>Error fetching users</h2>
          <p>{error.message}</p>
        </>
      )}
      {status === "fetched" && (
        <ul>
          {users.map((user) => {
            return <User key={user.id} {...user} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
