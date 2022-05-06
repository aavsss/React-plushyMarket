import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
// api
import { editPlushy } from '../../api/PlushyApi';

const useEditPlushy = (item, handleClose) => {
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

    useEffect(() => {
        if (item) {
            setName(item.name);
            setPrice(item.price);
            setQuantity(item.quantity);
            setDescription(item.description);
        }
    }, [item]);

    const queryClient = useQueryClient();

    const handleSuccess = () => {
        handleClose();
        queryClient.invalidateQueries('seller_plushies');
    }

    const uploadPlushyMutation = useMutation(() => editPlushy(
        item.id,
        JSON.stringify({
            "name": name,
            "price": price,
            "quantity": quantity,
            "description": description
        }), imageFile),
        {
            onSuccess: handleSuccess
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