import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Private = () => {
  const signed = false;
  return signed ? <Home /> : <Login />;
};

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Private />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
