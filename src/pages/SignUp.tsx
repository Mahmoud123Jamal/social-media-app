import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/pages/login.css";

export default function SignUp() {
  const navigate = useNavigate(); 

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = /^\S+@\S+\.\S+$/.test(email);
  const usernameIsValid = username.trim().length > 0;
  const passwordIsValid = password.length >= 6;
  const confirmPasswordIsValid = confirmPassword === password && confirmPassword.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (usernameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid) {
      alert("Sign Up successful!");
    
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched({ ...touched, [field]: true });
  };

  const goToLogin = () => {
    navigate("/login"); 
  };

  return (
    <div className="login d-flex align-items-center justify-content-center vh-100 bg-light w-100">
      <div className="container bg-white rounded shadow p-4" style={{ maxWidth: "900px" }}>
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="loginLogo mb-3">ghorabaSocial</h3>
            <p className="loginDesc">
              Join ghorabaSocial and connect with people around the world.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-md-6 d-flex align-items-center">
            <form className="w-100" noValidate onSubmit={handleSubmit}>
              <div className="d-flex flex-column gap-3">
                <input
                  type="text"
                  placeholder="Username"
                  className={`form-control ${
                    (touched.username || submitted) && !usernameIsValid ? "is-invalid" : ""
                  }`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => handleBlur("username")}
                  required
                />
                <div className="invalid-feedback">Username is required.</div>

                <input
                  type="email"
                  placeholder="Email"
                  className={`form-control ${
                    (touched.email || submitted) && !emailIsValid ? "is-invalid" : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  required
                />
                <div className="invalid-feedback">Please enter a valid email address.</div>

                <input
                  type="password"
                  placeholder="Password"
                  className={`form-control ${
                    (touched.password || submitted) && !passwordIsValid ? "is-invalid" : ""
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur("password")}
                  required
                />
                <div className="invalid-feedback">Password must be at least 6 characters.</div>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={`form-control ${
                    (touched.confirmPassword || submitted) && !confirmPasswordIsValid ? "is-invalid" : ""
                  }`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  required
                />
                <div className="invalid-feedback">Passwords do not match.</div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>

                <span
                  className="text-center text-primary cursor-pointer"
                  onClick={goToLogin} 
                  role="button"
                >
                  Already have an account? Log In
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
