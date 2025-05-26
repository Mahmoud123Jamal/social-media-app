import { IoEllipsisVerticalSharp } from "react-icons/io5";
import "../styles/components/Posts.css";
import love from "/assets/heart.png";
import Like from "/assets/like.png";
import { Users } from "../dummyData";
import { useState } from "react";
import { PostProps } from "../types";

export default function Post({ post }: PostProps) {
  const [like, setLike] = useState<number>(post.like || 0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setLike(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  const user = Users.find((user) => user.id === post.userId);

  return (
    <div className="mt-4">
      <div className="post-content">
        <div className="post-top d-flex flex-row align-items-center justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <img
              src={user?.profilePicture || "assets/person/default.jpg"}
              alt="person"
              width={40}
              height={40}
              className="img-thumbnail rounded-circle"
            />
            <span className="fw-bold fs-5 mx-2">
              {user?.username || "Unknown"}
            </span>
            <span>{post.date || "Unknown date"}</span>
          </div>
          <IoEllipsisVerticalSharp className="fs-4 text-secondary" />
        </div>

        <div className="post-center mt-2">
          {post.desc && <p className="fs-5">{post.desc}</p>}
          {post.photo && <img src={post.photo} alt="post" />}
        </div>

        <div className="post-bottom mt-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <img
              src={Like}
              alt="like"
              width={25}
              height={25}
              className="cursor-pointer img-thumbnail rounded-circle"
              onClick={handleLike}
            />
            <img
              src={love}
              alt="love"
              width={25}
              height={25}
              className="cursor-pointer img-thumbnail rounded-circle"
              onClick={handleLike}
            />
            <span>{like}</span>
          </div>
          <div>{post.comment || 0} comments</div>
        </div>
      </div>
    </div>
  );
}
