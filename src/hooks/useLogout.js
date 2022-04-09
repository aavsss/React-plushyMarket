import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// api
import { logoutUser } from "../api/authenticationApi";

const useLogout = () => {
    const navigate = useNavigate();
    const logoutMutation = useMutation(() => logoutUser(), {
        onSuccess: () => navigate("/")
    });
    return {
        logoutMutation
    };
};

export default useLogout;