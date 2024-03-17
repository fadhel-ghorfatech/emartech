import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Typography,
  styled
} from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import emarTechLogo  from "../../assets/emartech-logo.png";

const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('../../src/assets/reset-password-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});


export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }

    try {
      // Logic
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
                Reset Password
              </Typography>
              <InputField
                label="New Password"
                type={showPassword ? "text" : "password"}
                labelClassName="input-label"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <Icon icon="eva:eye-fill" />
                        ) : (
                          <Icon icon="eva:eye-off-fill" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <InputField
                label="Confirm New Password"
                type={confirmPassword ? "text" : "password"}
                labelClassName="input-label"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setConfirmPassword((prev) => !prev)}
                      >
                        {confirmPassword ? (
                          <Icon icon="eva:eye-fill" />
                        ) : (
                          <Icon icon="eva:eye-off-fill" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant={ButtonVariants.OUTLINED} className="auth-btn input-label">Reset Password</Button>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
