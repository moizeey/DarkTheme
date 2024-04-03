import { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const { setUser } = useContext(userContext);
  const handleOnClick = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };

  return (
    <div className=" flex flex-col w-[50%]">
      <h3 className=" text-white pb-6 text-3xl font-semibold">Login</h3>
      <input
        className="p-2 mb-4 rounded-lg text-sm "
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="p-2 mb-4 rounded-lg text-sm "
        type="password"
        value={pass}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="text-white" onClick={handleOnClick}>
        Submit
      </button>
    </div>
  );
}
export default Login;
