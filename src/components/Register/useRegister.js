import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// api 
import { registerUser, loginUser } from '../../api/authenticationApi';

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  }

  const registerMutation = useMutation(() => registerUser(email, password), 
    {
      onSuccess: () => navigate('/home')
    }
  );

  return {
    handleEmailChange,
    handlePasswordChange,
    registerMutation
  };
};

export default useRegister;