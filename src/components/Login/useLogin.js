import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// api 
import { loginUser } from "../../api/authenticationApi";


const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openRegister, setOpenRegister] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  }

  const loginMutation = useMutation(() => loginUser(email, password), 
    {
      onSuccess: () => navigate('/splash')
    }
  );

  return{
    handleEmailChange, 
    handlePasswordChange,
    loginMutation,
    openRegister,
    setOpenRegister
  };
};

export default useLogin;