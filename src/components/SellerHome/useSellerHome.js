import { useContext, useState } from "react";
import { useQuery } from "react-query";
// api
import { fetchPlushiesOfOwner } from "../../api/PlushyApi";

const useSellerHome = () => {
    const [openUploadPlushyDialog, setOpenUploadPlushyDialog] = useState(false);
    const [openEditPlushyDialog, setOpenEditPlushyDialog] = useState(false);

    const response = useQuery('seller_plushies', () => fetchPlushiesOfOwner());

    return {
        response,
        openUploadPlushyDialog,
        openEditPlushyDialog,
        setOpenUploadPlushyDialog,
        setOpenEditPlushyDialog
    };

};

export default useSellerHome;