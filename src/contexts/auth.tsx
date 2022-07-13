import { USER } from "../constants";

const isAuthenticated = () => {
  const username = JSON.parse(localStorage.getItem("username") || "teste");
  const password = JSON.parse(localStorage.getItem("password") || "teste");

  return username == USER.USERNAME && password == USER.PASSWORD;
};

export default isAuthenticated;
