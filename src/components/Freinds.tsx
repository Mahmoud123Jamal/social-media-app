
import { FreindsProps } from "../types";

export default function Freinds({ users }: FreindsProps) {
  return (
    <div>
        <li className="mb-3 ">
              <img
                src={users.profilePicture}
                alt="friend"
                width={30}
                height={30}
                className="rounded-circle"
              />
              <span className="text-dark fw-bold fs-6 ms-2">{users.username}</span>
              </li>
    </div>
  )
}
