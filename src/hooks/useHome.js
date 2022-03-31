import { useQuery } from "react-query";
// api
import { getUserContext } from "../api/UserApi";

const useHome = () => {
    const response = useQuery("user", getUserContext);
    return response;
}

export default useHome;
