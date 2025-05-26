import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/pages/login.css";

export default function Login() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = /^\S+@\S+\.\S+$/.test(email);
  const passwordIsValid = password.length >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (emailIsValid && passwordIsValid) {
      alert("Login successful!");
    }
  };

  const handleBlur = (field: "email" | "password") => {
    setTouched({ ...touched, [field]: true });
  };

  const goToSignUp = () => {
    navigate("/signup"); 
  };

  return (
    <div className="login d-flex align-items-center justify-content-center vh-100 bg-light w-100">
      <div className="container bg-white rounded shadow p-4" style={{ maxWidth: "900px" }}>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="loginLogo mb-3">ghorabaSocial</h3>
            <p className="loginDesc">
              Connect with friends and the world around you on ghorabaSocial.
            </p>
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <form className="w-100" noValidate onSubmit={handleSubmit}>
              <div className="d-flex flex-column gap-3">
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
                  minLength={6}
                />
                <div className="invalid-feedback">Password must be at least 6 characters.</div>

                <button type="submit" className="btn btn-primary w-100">
                  Log In
                </button>

                <span className="text-center text-primary">Forgot Password?</span>

                <button
                  type="button"
                  className="loginRegisterButton"
                  onClick={goToSignUp} 
                >
                  Create a New Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
