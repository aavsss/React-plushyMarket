import { useContext, useState } from "react";
import { useQuery } from "react-query";
// api
import { fetchPlushiesOfOwner } from "../../api/PlushyApi";

const useSellerHome = () => {
    const [openUploadPlushyDialog, setOpenUploadPlushyDialog] = useState(false);
    const response = useQuery('seller_plushies', () => fetchPlushiesOfOwner());
    return {
        response,
        openUploadPlushyDialog,
        setOpenUploadPlushyDialog
    };

};

export default useSellerHome;