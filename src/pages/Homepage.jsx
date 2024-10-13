import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Homepage() {
  return (
    <div>
        <NavBar />
      <h2>Homepage</h2>
      
      <hr />
      <a href="/courses">Courses with A</a>
      <hr />
      <Link to="/courses">Courses with Link</Link>
    </div>
  );
}

export default Homepage;
