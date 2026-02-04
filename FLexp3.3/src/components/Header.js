import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">

      {/* TOP My Profile Button */}
      <Link to="/profile" className="top-link">
        My Profile
      </Link>

      {/* Navigation buttons */}
      <div className="nav">
        <Link to="/profile" className="btn">Profile</Link>
        <Link to="/dashboard" className="btn">Dashboard</Link>
      </div>

    </div>
  );
}

export default Header;
