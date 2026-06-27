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
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields.");
      return;
    }

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
          placeholder="Enter your full name"
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
          placeholder="Enter your phone number"
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
          placeholder="Enter your email"
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
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Company name</label>

        <input
          type="text"
          name="company"
          placeholder="Enter your company name"
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