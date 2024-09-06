import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUp from "./pages/singUp";
import SingIn from "./pages/singIn";
import Home from "./pages/homePage";
// import PaginaBase from "./pages/paginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="singup" element={<SingUp />}></Route>
          <Route path="singin" element={<SingIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
