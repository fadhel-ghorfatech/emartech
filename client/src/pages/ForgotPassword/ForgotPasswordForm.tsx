import { Box, Button, Container, Typography, styled } from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import emarTechLogo from "../../assets/emartech-logo.png";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { forgotPasswordService } from "../../services/userServiceCalls";
import { useCallback } from "react";
import { forgotPasswordFormSchema } from "../../schemas";

const StyledBackgroundBox = styled(Box)({
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

const initialValues = {
  email: "",
};

export const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const handleSubmitAction = useCallback(
    (values: any) => {
      forgotPasswordService(values, (err: any, response: any) => {
        if (err) console.log("-0------error=------------", err);
        if (response) navigate("/emailVerification");
      });
    },
    [navigate]
  );

  const { values, handleChange, handleSubmit, isValid, isSubmitting } = useForm(
    {
      initialValues,
      handleSubmitAction,
      validationSchema: forgotPasswordFormSchema,
    }
  );

  console.log("🚀 ~ ForgotPasswordForm ~ isSubmitting:", isSubmitting);

  return (
    <Container className="max-w-100 space-0 main-container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
          <Container className="space-0 image-container d-mobile-none">
            <StyledBackgroundBox className="min-h-100vh image"></StyledBackgroundBox>
          </Container>
          <Container className="content-container d-flex justify-center">
            <Box className="auth-container flex-center">
              <img
                className="emar-logo"
                src={emarTechLogo}
                alt="EmarTech Logo"
              />
              <Typography className="auth-heading">
                Forgot your password?
              </Typography>
              <Typography className="auth-heading">
                Enter your email address or phone number and we’ll help you
                reset your password.
              </Typography>
              <InputField
                name="email"
                value={values.email}
                label="Email address or phone number"
                labelClassName="input-label"
                onChange={handleChange}
              />
              <Button
                disabled={!isValid || isSubmitting}
                variant={ButtonVariants.OUTLINED}
                type="submit"
                className="auth-btn input-label"
              >
                Reset Password
              </Button>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
