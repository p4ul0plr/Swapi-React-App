import { Fragment, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";
import Logo, { LOGO_COLORS } from "../components/Logo";
import GalaxyBackground from "../components/GalaxyBackground";
import CardLogin from "../components/CardLogin";
import Submit from "../components/Submit";
import Margin from "../components/Margin";
import Input from "../components/Input";
import Text from "../components/Text";
import MyContext from "../contexts/MyContext";
import IsLogged from "../contexts/auth";
import { Container } from "../components/Container";
import { Alignment } from "../components/Alignment";

function Login() {
  const [submit, setSubmit] = useState<boolean>(false);
  const { userName, setUserName, password, setPassword }: any =
    useContext(MyContext);
  const isLogged = IsLogged();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLogged) {
      setSubmit(true);
    } else {
      alert("Username or password is incorrect!");
    }
  };

  return (
    <Fragment>
      {isLogged && submit && <Navigate to="/home" replace={true} />}
      <GalaxyBackground>
        <Margin $all="20px">
          <CardLogin>
            <Alignment $directionX="center">
              <Logo $height="auto" $width="420px" $color={LOGO_COLORS.YELLOW} />
            </Alignment>
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
        </Margin>
      </GalaxyBackground>
    </Fragment>
  );
}

export default Login;
