import { useContext } from "react";
import { USER } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";
import MyContext from "./MyContext";

/* function isAuthenticated() {
  const { userName, password }: any = useContext(MyContext);

  return userName === USER.USERNAME && password === USER.PASSWORD;
} */
const isAuthenticated = () => {
  const username = JSON.parse(localStorage.getItem("username") || "");
  const password = JSON.parse(localStorage.getItem("password") || "");

  return username == USER.USERNAME && password == USER.PASSWORD;
};

export default isAuthenticated;
