import { Fragment, useState } from "react";
import { sizes } from "../styles/themes/sizes";
import { colors } from "../styles/themes/colors";
import Logo, { LOGO_COLORS } from "../components/Logo";
import GalaxyBackground from "../components/GalaxyBackground";
import GlobalStyle from "../styles/base/global";
import CardLogin from "../components/CardLogin";
import Input from "../components/Input";
import Text from "../components/Text";
import Margin from "../components/Margin";

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Fragment>
      <GalaxyBackground>
        <CardLogin>
          <Logo $color={LOGO_COLORS.YELLOW} />
          <Margin $top="40px">
            <Text $size={sizes.XL} $color={colors.TITLE_1} $center>
              Enter your username and password
            </Text>
          </Margin>
          <form>
            <Margin $top="30px">
              <Input
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                $placeholder="USERNAME"
                $type="text"
              />
            </Margin>
            <Margin $top="30px">
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                $placeholder="PASSWORD"
                $type="password"
              />
            </Margin>
          </form>
        </CardLogin>
      </GalaxyBackground>
      <GlobalStyle />
    </Fragment>
  );
}

export default Login;
