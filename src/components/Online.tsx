type User = {
    id: number;
    username: string;
    profilePicture: string;
  };
  
  export default function Online({ user }: { user: User }) {
    return (
      <div className="d-flex align-items-center mb-3 ms-3">
        <div className="position-relative">
          <img
            src={user.profilePicture}
            alt="person"
            width={45}
            height={45}
            className="rounded-circle"
          />
          <span
            className="position-absolute top-0 start-100 translate-middle bg-success border border-white rounded-circle"
            style={{ width: '12px', height: '12px' }}
          ></span>
        </div>
        <span className="ms-3 fw-bold fs-6 text-dark">{user.username}</span>
      </div>
    );
  }
  