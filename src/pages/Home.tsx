import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Submit from "../components/Submit";

function Home() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">LOGOUT</NavLink>
          </li>
          <li>
            <NavLink to="/">ABOUT</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Home;
