import Share from "./Share";
import Post from "./Post";
import {Posts} from "../dummyData";
import { FeedProps } from "../types";

export default function Feed({ className }: FeedProps) {
  return (
    <div className=" flex-grow-1 bg-light  ">
      <div className="p-3">
        <Share/>
{Posts.map((post,index)=>(<Post key={index} post={post}/>))}
      </div>
    </div>
  )
}
