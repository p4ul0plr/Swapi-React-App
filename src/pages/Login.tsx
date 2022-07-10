import { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";
import Logo, { LOGO_COLORS } from "../components/Logo";
import GalaxyBackground from "../components/GalaxyBackground";
import GlobalStyle from "../styles/base/global";
import CardLogin from "../components/CardLogin";
import Submit from "../components/Submit";
import Margin from "../components/Margin";
import Input from "../components/Input";
import Text from "../components/Text";

const USERNAME = "admin";
const PASSWORD = "Admin123!";

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  const isLogged = () => {
    return userName === USERNAME && password === PASSWORD;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLogged()) {
      setSubmit(true);
    } else {
      alert("Username or password is incorrect!");
    }
  };

  return (
    <Fragment>
      {isLogged() && submit && <Navigate to="/home" replace={true} />}
      <GalaxyBackground>
        <CardLogin>
          <Logo $color={LOGO_COLORS.YELLOW} />
          <Margin $top="40px">
            <Text $size={sizes.XL} $color={colors.TITLE_1} $center>
              Enter your username and password
            </Text>
          </Margin>
          <form onSubmit={handleSubmit}>
            <Margin $top="30px">
              <Input
                value={userName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUserName(event.target.value)
                }
                $placeholder="USERNAME"
                $type="text"
              />
            </Margin>
            <Margin $top="30px">
              <Input
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
                $placeholder="PASSWORD"
                $type="password"
              />
            </Margin>
            <Margin $top="30px">
              <Submit $value="LOGIN" />
            </Margin>
          </form>
        </CardLogin>
      </GalaxyBackground>
      <GlobalStyle />
    </Fragment>
  );
}

export default Login;
