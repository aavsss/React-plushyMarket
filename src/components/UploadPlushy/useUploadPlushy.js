import { useState } from "react";
import { useMutation } from "react-query";
// api
import { uploadPlushy } from "../../api/PlushyApi";

const useUploadPlushy = (handleClose) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(-1);
    const [quantity, setQuantity] = useState(-1);
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const uploadPlushyMutation = useMutation(() => uploadPlushy(
        JSON.stringify({
            "name": name,
            "price": price,
            "quantity": quantity,
            "description": description
        }), imageFile),
        {
            onSuccess: handleClose
        }
    );

    return {
        setName,
        setPrice,
        setQuantity,
        setDescription,
        uploadPlushyMutation,
        setImageFile
    }
};

export default useUploadPlushy;