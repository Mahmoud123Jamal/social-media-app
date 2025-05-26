import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
export default function App() {
  return (
    <div className="d-flex flex-column h-100">
      <NavBar />
      
      <div className="d-flex flex-grow-1">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
       
      </div>
      <Footer />
    </div>
  );
}
