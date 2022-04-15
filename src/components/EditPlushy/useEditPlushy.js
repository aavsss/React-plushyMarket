import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
// api
import { editPlushy } from '../../api/PlushyApi';

const useEditPlushy = (handleClose) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(-1);
    const [quantity, setQuantity] = useState(-1);
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(undefined);

    useEffect(() => {
        if (!imageFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(imageFile);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [imageFile]);

    const uploadPlushyMutation = useMutation(() => editPlushy(
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
        setImageFile,
        imageFile,
        preview
    };
};

export default useEditPlushy;