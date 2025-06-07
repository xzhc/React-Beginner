import { Link } from "react-router-dom";
import teamMembers from "./teamMembers.json";

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
            {teamMembers.map((member) => (
              <li key={member.id}>
                <Link to={`/team/${member.id}`}>{member.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
