import { Fragment } from "react";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/base/global";

function App() {
  localStorage.setItem("username", JSON.stringify(""));
  localStorage.setItem("password", JSON.stringify(""));

  return (
    <Fragment>
      <RoutesApp />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
