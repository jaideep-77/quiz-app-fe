import { useContext } from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthProvider";
import Game from "./Game";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";

const Protected = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [])

    return (
        <>
            <Routes>
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/game' element={<Game />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>);
};
export default Protected;