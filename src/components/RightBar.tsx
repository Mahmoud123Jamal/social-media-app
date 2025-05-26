import "../styles/components/RightBar.css";
import gift from "/assets/gift.png";
import ad from "/assets/ad.png";
import { Users } from "../dummyData";
import Online from "./Online";
import { RightBarProps } from "../types";

export default function RightBar({ profile }: RightBarProps) {
  const HomeRightBar = () => (
    <div className="right-bar">
      <div className="right-bar-container">
        <div className="d-flex align-items-center mb-3">
          <img src={gift} alt="gift" className="img-thumbnail" width={40} height={50} />
          <span className="ms-2">
            <b>Ahmed</b> and 3 <b>other friends</b> have birthday today
          </span>
        </div>
        <hr />
        <img src={ad} alt="ad" className="img-fluid rounded p-2" />
        <h5 className="mt-3">Online Friends</h5>
        <div className="d-flex flex-column mt-3">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );

  const ProfileRightbar = () => (
    <div className="rightbarWrapper">
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem d-flex">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Menoufia</span>
        </div>
        <div className="rightbarInfoItem d-flex">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Ashmoon</span>
        </div>
        <div className="rightbarInfoItem d-flex">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>

      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings d-flex flex-wrap gap-5">
        {[1, 3, 4, 5, 6, 7].map((id) => (
          <div className="rightbarFollowing" key={id}>
            <img
              src={`assets/person/${id}.jpeg`}
              alt="person"
              className="rightbarFollowingImg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `assets/person/${id}.jpg`;
              }}
            />
            <span className="rightbarFollowingName">
              {Users.find((user) => user.id === id)?.username || "Unknown"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return <div>{profile ? <ProfileRightbar /> : <HomeRightBar />}</div>;
}
