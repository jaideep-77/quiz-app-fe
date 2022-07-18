const { useNavigate } = require("react-router-dom")

const Protected = ({ children }) => {

    const navigate = useNavigate();

    return children;
}

export default Protected;