import { useQuery } from "react-query";
// api
import { getUserRole } from "../api/UserApi";

const useHome = () => {
    const response = useQuery("user", getUserRole);
    return response;
}

export default useHome;
