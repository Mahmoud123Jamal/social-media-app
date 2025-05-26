import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import Feed from "../components/Feed";
import "../styles/pages/Home.css";
export default function Home() {
  return (
    <div className="d-flex flex-row justify-content-between w-100">
      <div className="d-none d-xl-block">
        <SideBar />
      </div>     
      <div className="feed">
        <Feed />
      </div>
      <div className="d-none d-lg-block">
      <RightBar profile={false} />
      </div>
    </div>
  );
}
