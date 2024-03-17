import {
  Box,
  Button,
  Container,
  Typography,
  styled
} from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import emarTechLogo  from "../../assets/emartech-logo.png";

const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('../../src/assets/forgot-password-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});

export const ForgotPasswordForm = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }

    try {
      // Handle forgot password logic
    } 
    catch (err) {
      // Handle error
    }
  };

  return (
    <Container className="max-w-100 space-0 main-container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
          <Container className="space-0 image-container d-mobile-none">
            <StyledBackgroundBox className="min-h-100vh image">
            </StyledBackgroundBox>
          </Container>
          <Container className="content-container d-flex justify-center">
            <Box className="auth-container flex-center">
              <img className="emar-logo" src={emarTechLogo} alt="EmarTech Logo" />
              <Typography className="auth-heading">
                Forgot your password?
              </Typography>
              <Typography className="auth-heading">
                Enter your email address or phone number and we’ll help you reset your password.
              </Typography>
              <InputField
                label="Email address or phone number"
                labelClassName="input-label"
              />
              <Button variant={ButtonVariants.OUTLINED} className="auth-btn input-label">Reset Password</Button>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
