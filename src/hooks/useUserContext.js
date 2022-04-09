import { useQuery } from "react-query";
// api
import { getUserContext } from "../api/UserApi";

const useUserContext = () => {
    const response = useQuery("userContext", () => getUserContext());
    return response;
}

export default useUserContext;