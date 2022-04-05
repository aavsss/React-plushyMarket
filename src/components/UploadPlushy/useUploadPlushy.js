import { useState } from "react";
import { useMutation } from "react-query";
// api
import { uploadPlushy } from "../../api/PlushyApi";

const useUploadPlushy = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(-1);
    const [quantity, setQuantity] = useState(-1);
    const [description, setDescription] = useState("");

    return {
        setName,
        setPrice,
        setQuantity,
        setDescription
    }
};

export default useUploadPlushy;