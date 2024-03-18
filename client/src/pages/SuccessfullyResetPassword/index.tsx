import { FC } from "react";
import { Container, Box, Typography, styled, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import emarTechLogo  from "../../assets/emartech-logo.png";
import { ButtonVariants } from "../../components/constants";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('../../src/assets/success-reset-password-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});

export const SuccessfullyResetPassword : FC = () => {
  const navigate = useNavigate();
  return (
    <Container className="max-w-100 space-0 main-container">
      <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
        <Container className="space-0 image-container d-mobile-none">
          <StyledBackgroundBox className="min-h-100vh image">
          </StyledBackgroundBox>
        </Container>
        <Container className="content-container d-flex justify-center">
          <Box className="auth-container flex-center">
            <img className="emar-logo" src={emarTechLogo} alt="EmarTech Logo" />
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
          </Box>
        </Container>
      </Container>
    </Container>
  );
};
