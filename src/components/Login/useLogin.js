import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
// api 
import { loginUser } from "../../api/authenticationApi";
import { getUserContext } from "../../api/UserApi";
// hooks
import useUserContext from "../../hooks/useUserContext";


const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openRegister, setOpenRegister] = useState(false);
  // todo: redirect to whichever page user came from
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const navigate = useNavigate();

  if (redirectToReferrer) {
    navigate(from.pathname);
  }

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  }

  const userContextResponse = useUserContext();
  const { data } = userContextResponse;
  if (data && data.email) {
    navigate('/home');
  }

  const loginMutation = useMutation(() => loginUser(email, password),
    {
      onSuccess: () => navigate('/splash')
    }
  );

  const handleLogin = () => {
    loginMutation.mutate();
  }

  // TODO: not working. fix it
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
