import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// api
import { getUserContext } from "../../api/UserApi";

const useSplash = () => {
    const response  = useQuery('user_role', getUserContext);
    const navigate = useNavigate();
    if (response) {
        const { data } = response
        console.log("data", data)
        if (data && data.appUserRole === "ADMIN") {
            navigate("/adminHome")
        }
        if (data && data.appUserRole === "SELLER") {
            navigate("/sellerHome")
        }
    }
};

export default useSplash;