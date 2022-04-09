import { Navigate, useLocation, Outlet } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { data, isLoading } = useUserContext();
    if (isLoading) return <></>
    if (data && data.email) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />
};

export default PrivateRoute;
