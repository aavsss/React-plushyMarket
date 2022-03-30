import { useState } from "react";
import { useMutation } from "react-query";
// api
import { uploadPlushy } from "../../api/PlushyApi";

const useUpload = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const handleName = (name) => {
    setName(name);
  };

  const handlePrice = (price) => {
    setPrice(price);
  };

  const handleQuantity = (quantity) => {
    setQuantity(quantity);
  };

  const handleDescription = (description) => {
    setDescription(description);
  };

  const uploadMutation = useMutation(() => uploadPlushy({
    name,
    price,
    quantity,
    description
  }));

  return {
    handleName,
    handlePrice,
    handleQuantity,
    handleDescription,
    uploadMutation
  };
};

export default useUpload;