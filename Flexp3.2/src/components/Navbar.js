import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>

      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
