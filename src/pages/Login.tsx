import { Fragment } from "react";
import GalaxyBackground from "../components/GalaxyBackground";
import GlobalStyle from "../styles/base/global";

function Login() {
  return (
    <Fragment>
      <div className="Login">
        <GalaxyBackground>
          <h1>Login</h1>
        </GalaxyBackground>
      </div>
      <GlobalStyle />
    </Fragment>
  );
}

export default Login;
