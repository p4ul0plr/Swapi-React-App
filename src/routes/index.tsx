import { BrowserRouter, Routes, Route } from "react-router-dom";
import isLogged from "../contexts/auth";
import Login from "../pages/Login";
import Home from "../pages/Home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={isLogged() ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
