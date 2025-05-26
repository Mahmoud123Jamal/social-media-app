export type Post = {
    id: number;
    userId: number;
    desc?: string;
    photo?: string;
    date: string;
    like: number;
    comment: number;
  };
  
  export type User = {
    id: number;
    profilePicture: string;
    username: string;
  };
  
  export type RightBarProps = {
    profile: boolean;
  };
  
  export type PostProps = {
    post: Post;
  };
  
  export type FreindsProps = {
    users: User;
  };
  

  export type FeedProps = {
    className?: string;
  };
  