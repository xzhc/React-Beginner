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
        <li>
          <Link to="/team">Team</Link>
          <ul>
            <li>
              <Link to="/team/joe">Joe</Link>
            </li>
            <li>
              <Link to="/team/sally">Sally</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
