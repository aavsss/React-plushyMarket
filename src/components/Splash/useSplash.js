import { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// api
import { getUserContext } from "../../api/UserApi";
// context
import { UserContext } from "../../context/userContext";

const useSplash = () => {
    const response = useQuery('userContext', getUserContext);

    const { setUserEmail } = useContext(UserContext);

    const navigate = useNavigate();

    if (response) {
        const { data } = response
        console.log("data", data)
        if (data && data.appUserRole === "USER") {
            setUserEmail(data.email);
            navigate("/home")
        }
        if (data && data.appUserRole === "ADMIN") {
            setUserEmail(data.email);
            navigate("/adminHome")
        }
    }
};

export default useSplash;
