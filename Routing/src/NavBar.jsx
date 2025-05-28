import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
      </ul>
    </nav>
  );
}
