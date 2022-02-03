import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// api 
import { loginUser } from "../../api/authenticationApi";


const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  }

  const loginMutation = useMutation(() => loginUser(email, password), 
    {
      onSuccess: () => navigate('/home')
    }
  );

  return{
    email, 
    password,
    handleEmailChange, 
    handlePasswordChange,
    loginMutation
  };
}

export default useLogin;