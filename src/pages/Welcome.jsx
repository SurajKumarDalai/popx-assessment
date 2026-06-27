import "./Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to PopX</h1>

      <p className="welcome-description">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <button
        className="primary-btn"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;