import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUp from "./pages/singUp";
import SingIn from "./pages/singIn";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/singup" element={<SingUp/>}></Route>
                <Route path="/singin" element={<SingIn/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;