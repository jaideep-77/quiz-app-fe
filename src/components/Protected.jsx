import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;