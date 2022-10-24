import { Link } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
