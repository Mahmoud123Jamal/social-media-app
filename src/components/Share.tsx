import "../styles/components/Share.css";
import { MdPermMedia, MdLocationOn } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";

export default function Share() {
  const bottomOptions = [
    {
      name: "Photo/Video",
      icon: <MdPermMedia />,
      colorClass: "text-danger",
    },
    {
      name: "Tag",
      icon: <IoMdPricetag />,
      colorClass: "text-primary",
    },
    {
      name: "Location",
      icon: <MdLocationOn />,
      colorClass: "text-success",
    },
    {
      name: "Feeling",
      icon: <BsFillEmojiSmileFill />,
      colorClass: "text-warning",
    },
  ];

  return (
    <div className="share-content ">
      <div className="share-wrapper">
        <div className="top-container d-flex flex-row align-items-center">
          <img
            src="assets/person/2.jpg"
            alt="person"
            width={45}
            height={45}
            className="img-thumbnail rounded-circle"
          />
          <input
            type="text"
            placeholder="What's in your mind ?"
            className="form-control border-0 bg-transparent shadow-none fw-bold text-dark fs-5"
          />
        </div>
        <hr />
        {/* Responsive bottom container */}
        <div className="bottom-container d-flex flex-column flex-md-row align-items-center gap-3">
          {bottomOptions.map((option, index) => (
            <div
              key={index}
              className="d-flex flex-row align-items-center gap-1 flex-grow-1 justify-content-center"
            >
              <span className={`${option.colorClass} me-2 fw-bold fs-5`}>
                {option.icon}
              </span>
              <span className="fw-bold fs-6">{option.name}</span>
            </div>
          ))}

          <button className="mt-3 mt-md-0 ms-md-4 btn bg-success text-white flex-shrink-0">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

