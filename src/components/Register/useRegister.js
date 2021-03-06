import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// api 
import { registerUser, registerSeller } from '../../api/authenticationApi';

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleFirstName = (firstName) => {
    setFirstName(firstName);
  };

  const handleLastName = (lastName) => {
    setLastName(lastName);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  }

  const registerMutation = useMutation(() => registerUser(firstName, lastName, email, password),
    {
      onSuccess: () => navigate('/home')
    }
  );


  return {
    handleFirstName,
    handleLastName,
    handleEmailChange,
    handlePasswordChange,
    registerMutation,
  };
};

export default useRegister;