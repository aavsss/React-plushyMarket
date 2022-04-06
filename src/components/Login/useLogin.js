import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

// api 
import { loginUser } from "../../api/authenticationApi";
import { getUserContext } from "../../api/UserApi";


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

  const userContext = useQuery(getUserContext);
  if (userContext) {
    navigate('/splash');
  }

  const loginMutation = useMutation(() => loginUser(email, password),
    {
      onSuccess: () => navigate('/splash')
    }
  );

  const handleLogin = () => {
    loginMutation.mutate();
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  }

  return {
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleKeyPress,
    openRegister,
    setOpenRegister
  };
};

export default useLogin;