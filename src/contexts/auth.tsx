import { USER } from "../constants";

const isAuthenticated = () => {
  const username = JSON.parse(localStorage.getItem("username") || "");
  const password = JSON.parse(localStorage.getItem("password") || "");

  return username == USER.USERNAME && password == USER.PASSWORD;
};

export default isAuthenticated;
