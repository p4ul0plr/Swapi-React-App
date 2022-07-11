import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../contexts/MyContext";

function Home() {
  const { userName, setUserName, password, setPassword }: any =
    useContext(MyContext);

  return (
    <Fragment>
      <h1>{userName}</h1>
      <h1>{password}</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">LOGOUT</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Home;
