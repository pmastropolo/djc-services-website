import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const NavBar = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <nav>

      <li>{!user && <button onClick={login}>Login/Signup</button>}</li>
      <li>{user && <button onClick={logout}>Logout</button>}</li>
    </nav>
  );
};

export default NavBar;