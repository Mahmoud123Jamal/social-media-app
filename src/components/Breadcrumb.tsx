import { Link, useLocation } from "react-router-dom";
import "../styles/components/Breadcrumb.css";

export default function Breadcrumb ()  {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className={`breadcrumb-item  ${isActive("/") ? "active" : ""}`}>
          {isActive("/") ? (
            <span className="text-light">Home</span>
          ) : (
            <Link to="/"><span className="text-light">Home</span></Link>
          )}
        </li>
        <li className={`breadcrumb-item  ${isActive("/profile") ? "active" : ""}`}>
          {isActive("/profile") ? (
            <span className="text-light">Profile</span>
          ) : (
            <Link to="/profile"><span className="text-light">Profile</span></Link>
          )}
        </li>
        <li className={`breadcrumb-item  ${isActive("/login") ? "active" : ""}`}>
          {isActive("/login") ? (
            <span className="text-light">Login</span>
          ) : (
            <Link to="/login"><span className="text-light ">Login</span></Link>
          )}
        </li>
        <li className={`breadcrumb-item  ${isActive("/signup") ? "active" : ""}`}>
          {isActive("/signup") ? (
            <span className="text-light fw-bold">SignUp</span>
          ) : (
            <Link to="/signup"><span className="text-light">SignUp</span></Link>
          )}
        </li>
      </ol>
    </nav>
  );
};
