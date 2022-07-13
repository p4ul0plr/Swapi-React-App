import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import isLogged from "../contexts/auth";

const Loader = lazy(() => import("../components/Loader"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Film = lazy(() => import("../pages/Film"));

function RoutesApp() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={isLogged() ? <Home /> : <Login />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/films/:id" element={<Film />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesApp;
