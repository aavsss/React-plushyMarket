import { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// api
import { getUserContext } from "../../api/UserApi";
// context
import { UserContext } from "../../context/userContext";
// hook
import useUserContext from "../../hooks/useUserContext";

const useSplash = () => {
    const response = useUserContext();

    const { setUserEmail } = useContext(UserContext);

    const navigate = useNavigate();

    if (response) {
        const { data } = response
        if (data && data.appUserRole === "USER") {
            setUserEmail(data.email);
            navigate("/home");
        }
        if (data && data.appUserRole === "ADMIN") {
            setUserEmail(data.email);
            navigate("/adminHome");
        }
    }
};

export default useSplash;
