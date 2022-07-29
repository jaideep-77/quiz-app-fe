import { useContext } from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthProvider";
import Game from "./Game";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Protected = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [])

    return (
        <div className="mx-10">
            <Navbar />
            <Routes>
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/game' element={<Game />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>);
};
export default Protected;