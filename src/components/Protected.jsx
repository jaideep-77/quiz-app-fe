const { Navigate } = require("react-router-dom")

const Protected = ({ authenicated, children }) => {
    if (!authenicated) {
        alert('Not authenticated. You will be returned to home page.');
        return <Navigate to='/' />
    }

    return children;
}

export default Protected;