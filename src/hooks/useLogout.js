import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// api
import { logoutUser } from "../api/authenticationApi";

const useLogout = () => {
    const navigate = useNavigate();
    const logoutMutation = useMutation(() => logoutUser(), {
        onSuccess: () => navigate("/")
    });
    const logout = () => logoutMutation.mutate();
    return {
        logout
    };
};

export default useLogout;