import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="profile-image"
          />

          <div>
            <h4>{user?.fullName || "Marry Doe"}</h4>
            <p>{user?.email || "marry@example.com"}</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;