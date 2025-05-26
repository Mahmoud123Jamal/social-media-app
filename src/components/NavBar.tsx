import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Breadcrumb from "./Breadcrumb";
import "../styles/components/NavBar.css";
export default function NavBar() {
  return (
    <div className="header bg-primary d-flex flex-row align-items-center flex-wrap">
      <span className="logo fs-2 fw-bold text-light h-2  mx-5">
        ghorabaSocial
      </span>

      <div className="input-container position-relative    ">
        <div className="position-absolute top-50 start-0 translate-middle-y ">
          <CiSearch className="fw-bold ms-3" />
        </div>
        <input
          type="text"
          id="search-input"
          name="search"
          placeholder="Search here"
          className=" form-control form-control-lg  ps-5 rounded-pill w-100 "
        />
      </div>
      <div className="max-hide ms-4 flex-row gap-2 text-light fw-bold  ">
      <Breadcrumb/>
      </div>
    
      <div className="ms-5 avatar">
        <img
          src="./assets/person/2.jpg"
          className="img-fluid rounded-circle"
          alt="person"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
