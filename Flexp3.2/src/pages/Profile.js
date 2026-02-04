import profile from "../assets/profile.png";

export default function Profile() {
  return (
    <div className="page center">
      <div className="profileCard">
        <img src={profile} alt="profile" />

        <h2>Asmita Singh</h2>

        <p className="title">AI/ML Student & Developer</p>

        <p className="details">
          Internship: AI Research Intern <br />
          Projects: Cancer Detection System, Fake News Detector, React Apps
        </p>
      </div>
    </div>
  );
}
