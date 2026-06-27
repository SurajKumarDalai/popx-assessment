import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Validate empty fields
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Get stored user data
    const user = JSON.parse(localStorage.getItem("userData"));

    // Validate credentials
    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      setError("");
      navigate("/profile");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">
        Signin to your <br />
        PopX account
      </h1>

      <p className="login-subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <div className="form-group">
        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />
      </div>

      <div className="form-group">
        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
      </div>

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;