import { Link } from "react-router-dom";
export function PostCard({ id, title, body }) {
  return (
    <div className="card">
      <div className="card-header">
        <Link to={`/posts/${id}`} className="link">
          {title}
        </Link>
      </div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`/posts/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
