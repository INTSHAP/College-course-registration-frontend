import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { AuthContextType, LoginResponseType } from "../types/auth/login.types";

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { setToken, setUser, setExpires } = useAuth() as AuthContextType;
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data: LoginResponseType) => {
      toast.success("Successfully logged in ");
      setToken(data.tokens.access.token);
      setUser(data.user);
      setExpires(data.tokens.access.expires);
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Successfully registered");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
