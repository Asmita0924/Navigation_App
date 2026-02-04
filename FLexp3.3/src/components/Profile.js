import React from "react";
import myPhoto from "../assets/myphoto.png";   // <-- your image path

function Profile() {
  return (
    <div className="card">

      {/* Profile Photo */}
      <img
        src={myPhoto}
        alt="profile"
        className="profile-img"
      />

      {/* Name */}
      <h2>Asmita Singh</h2>

      {/* Designation */}
      <p className="designation">B.E CSE | AI & ML Student</p>

      {/* Internships */}
      <h3>Internships</h3>
      <ul>
        <li>AI Research Intern – ABC Labs</li>
        <li>Web Development Intern – XYZ Tech</li>
      </ul>

      {/* Projects */}
      <h3>Projects</h3>
      <ul>
        <li>Cancer Detection using CNN</li>
        <li>Fake News Detection System</li>
        <li>Self-Adaptive AI Models</li>
      </ul>

    </div>
  );
}

export default Profile;
