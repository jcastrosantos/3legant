import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUp from "./pages/singUp";
import SingIn from "./pages/singIn";
import Home from "./pages/homePage";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route  path="/singup" element={<SingUp/>}></Route>
                <Route path="/singin" element={<SingIn/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;