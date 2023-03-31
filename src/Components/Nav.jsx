import { NavLink } from "react-router-dom";

import "../CSS/nav.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Login</NavLink>
        <NavLink to="homepage">Home</NavLink>
        <NavLink to="viewpage">ViewPage</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
