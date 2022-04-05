import { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// api
import { getUserContext } from "../../api/UserApi";
// context
import { UserContext } from "../../context/userContext";

const useSplash = () => {
    const response = useQuery('user_role', getUserContext);

    const { setUserEmail } = useContext(UserContext);

    const navigate = useNavigate();

    if (response) {
        const { data } = response
        console.log("data", data)
        if (data && data.appUserRole === "ADMIN") {
            setUserEmail(data.email);
            navigate("/adminHome")
        }
        if (data && data.appUserRole === "SELLER") {
            setUserEmail(data.email);
            navigate("/sellerHome")
        }
    }
};

export default useSplash;
