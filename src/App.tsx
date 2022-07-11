import { Fragment, useState } from "react";
import MyContext from "./contexts/MyContext";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/base/global";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Fragment>
      <MyContext.Provider
        value={{ userName, setUserName, password, setPassword }}
      >
        <RoutesApp />
        <GlobalStyle />
      </MyContext.Provider>
    </Fragment>
  );
}

export default App;
