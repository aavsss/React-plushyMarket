import { useContext, useState } from "react";
import { useQuery } from "react-query";
// api
import { fetchPlushiesOfOwner } from "../../api/PlushyApi";
// Context
import { UserContext } from "../../context/userContext";

const useSellerHome = () => {
    const [openUploadPlushyDialog, setOpenUploadPlushyDialog] = useState(false);
    const { userEmail } = useContext(UserContext);
    const response = useQuery('seller_plushies', () => fetchPlushiesOfOwner(userEmail));
    return {
        response,
        openUploadPlushyDialog,
        setOpenUploadPlushyDialog
    };

};

export default useSellerHome;