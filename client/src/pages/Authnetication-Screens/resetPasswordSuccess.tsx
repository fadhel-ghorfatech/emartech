import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { ButtonVariants } from "../../components/constants";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { AuthenticationWrapper } from "./index";


export const ResetPasswordSuccess : FC = () => {
  const navigate = useNavigate();
  return (
    <AuthenticationWrapper>
      <DoneIcon/>
      <Typography className="auth-heading">
                Congratulations!
      </Typography>
      <Typography className="auth-heading">
                Your Password Is Successfully Reset.
      </Typography>
      <Box className="flex-center flex-col">
        <Button 
          className="auth-btn input-label" 
          variant={ButtonVariants.OUTLINED}
          onClick={() => navigate("/login")}
        >
          <LoginIcon />
                Back to Login
        </Button>
      </Box>
    </AuthenticationWrapper>
  )
};
