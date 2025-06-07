import { Link, useParams } from "react-router-dom";
import teamMembers from "../teamMembers.json";
export function TeamMember() {
  const { id } = useParams();
  const member = teamMembers.find((member) => member.id === id);

  if (!member) {
    return <div>Team member not found</div>;
  }

  return (
    <div>
      <h2>{member.name}</h2>
      <p>ID: {member.id}</p>
      <Link to="..">Back to Team</Link>
    </div>
  );
}
