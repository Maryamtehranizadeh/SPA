import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <NavBar />
      <h2>About Us</h2>
      <Outlet />

      <ul>
        <li>
          <Link to="/about/programmers">Programmers</Link>
        </li>
        <li>
          <Link to="/about/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
