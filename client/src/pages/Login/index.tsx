import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { useAuth } from "../../contextProviders/authentication";

export const Login : FC = () => {
  const { user } = useAuth() as any;
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      if(user.role === "admin") {
        navigate("/admin/dashboard");
      }
      else {
        navigate("/products/view");
      }
    }
  }, [navigate, user]);
  

  return (
    <LoginForm/>
  );
};
