import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";
import "../styles/pages/profile.css"; 

export default function Profile() {
  return (
    <div className="d-flex flex-column flex-lg-row w-100 mt-5">
      <div className="d-none d-xl-block">
        <SideBar />
      </div>
      <div className="flex-grow-1 d-flex flex-column">
        <div className="profileRightTop">
          <div className="profileCover position-relative">
            <img
              className="profileCoverImg"
              src="assets/post/3.jpeg"
              alt="Cover"
            />
            <img
              className="profileUserImg"
              src="assets/person/2.jpg"
              alt="User"
            />
          </div>
          <div className="profileInfo text-center mt-4 mb-3">
            <h4 className="profileInfoName">M. Ghoraba</h4>
            <span className="profileInfoDesc">Hello my friends
            </span>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-2 p-2">
          <Feed className="w-100 w-lg-auto ms-0 ms-lg-4" />
          <div className="rightbarWrapper mt-3 mt-lg-0">
            <div className="d-none d-lg-block">
              <RightBar profile={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}