import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">
        Create your <br />
        PopX account
      </h1>

      <div className="form-group">
        <label>
          Full Name<span style={{ color: "red" }}> *</span>
        </label>

        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          Phone number<span style={{ color: "red" }}> *</span>
        </label>

        <input
          type="text"
          name="phone"
          placeholder="Marry Doe"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          Email address<span style={{ color: "red" }}> *</span>
        </label>

        <input
          type="email"
          name="email"
          placeholder="Marry Doe"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          Password<span style={{ color: "red" }}> *</span>
        </label>

        <input
          type="password"
          name="password"
          placeholder="Marry Doe"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Company name</label>

        <input
          type="text"
          name="company"
          placeholder="Marry Doe"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          Are you an Agency?<span style={{ color: "red" }}> *</span>
        </label>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button className="create-btn" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;