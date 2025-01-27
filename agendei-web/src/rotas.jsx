import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/register/register";
import Appointments from "./pages/appointments/appointments.jsx";
import Login from "./pages/login/login.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<Appointments />} />
        </Routes>    
    </BrowserRouter>
}

export default Rotas;