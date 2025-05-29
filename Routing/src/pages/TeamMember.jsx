import { Link } from "react-router-dom";
export default function TeamMember({ name }) {
  return (
    <>
      <h1>Team Member- {name}</h1>
      <Link to="..">Back to Team</Link>
    </>
  );
}
