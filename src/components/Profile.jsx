import { useContext } from "react";

import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-white flex ">Please Login</div>;
  return <div className="text-white">Welcome {user.username}</div>;
}
export default Profile;
