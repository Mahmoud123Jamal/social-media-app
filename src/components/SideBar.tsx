import "../styles/components/SideBar.css";
import Freinds from "./Freinds";
import {Users} from "../dummyData";
import { MdOutlineRssFeed , MdGroups } from "react-icons/md";
import { BsChatSquareFill , BsCalendar2EventFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { FaBookmark , FaQuestionCircle } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";

export default function SideBar() {
  const menuItems = [
    { icon: <MdOutlineRssFeed />, label: "Feed" },
    { icon: <BsChatSquareFill />, label: "Chats" },
    { icon: <BiSolidVideos />, label: "Videos" },
    { icon: <MdGroups />, label: "Groups" },
    { icon: <FaBookmark />, label: "Bookmark" },
    { icon: <FaQuestionCircle />, label: "Questions" },
    { icon: <IoBagSharp />, label: "Jobs" },
    { icon: <BsCalendar2EventFill />, label: "Events" },
    { icon: <RiGraduationCapFill />, label: "Courses" },
  ];

  return (
    <div className="Side-bar  p-3 bg-light cursor-pointer">
      <ul className="fw-bold text-dark fs-5">
        {menuItems.map((item, index) => (
          <li key={index} className="d-flex align-items-center gap-2 mb-3">
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary w-100 mb-3">Show More</button>
      <hr />
      <ul>
      {
        Users.map((user, index) => (
          <Freinds key={index} users={user} />
        ))
      }
      </ul>
    </div>
  );
}
