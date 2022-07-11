import { useContext } from "react";
import MyContext from "./MyContext";

function IsLogged() {
  const USER = {
    USERNAME: "admin",
    PASSWORD: "Admin123!",
  };
  const { userName, password }: any = useContext(MyContext);

  return userName === USER.USERNAME && password === USER.PASSWORD;
}

export default IsLogged;
