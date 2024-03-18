import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { signInService } from "../../services/userServiceCalls";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import emarTechLogo from "../../assets/emartech-logo.png";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { loginFormSchema } from "../../schemas";

const StyledBackgroundBox = styled(Box)({
  backgroundImage: "url('../../src/assets/auth-login-1.png')",
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
  password: "",
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmitAction = useCallback(
    (values: any) => {
      setIsSubmitting(true);
      signInService(values, (err: any, response: any) => {
        setIsSubmitting(false);
        if (err) setLoginError(true);
        if (response) navigate("/dashboard");
      });
    },
    [navigate]
  );

  const { values, handleChange, handleSubmit, isValid } = useForm({
    initialValues,
    handleSubmitAction,
    validationSchema: loginFormSchema,
  });

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
              <Typography className="auth-heading">Login</Typography>
              {loginError ? (
                <Box sx={{ color: "red" }}>Invalid credentials</Box>
              ) : null}
              <Box className="form-container flex-center">
                <InputField
                  label="Email address or phone number"
                  labelClassName="input-label"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <InputField
                  value={values.password}
                  name="password"
                  label="Password"
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
                  onChange={handleChange}
                />
                <Button
                  className="auth-btn input-label"
                  disabled={!isValid || isSubmitting}
                  type="submit"
                  variant={ButtonVariants.OUTLINED}
                >
                  Login
                </Button>
              </Box>
              <Box className="link-holder">
                <Link href="/forgotPassword" className="link input-label">
                  Forgot Password?
                </Link>
              </Box>
              <Box>
                <Box className="flex-center position-relative divider-box">
                  <Divider />
                  <Box component={"span"} className="span-content input-label">
                    Or login using
                  </Box>
                </Box>
                <Box className="flex-center flex-col">
                  <Button
                    className="input-label"
                    variant={ButtonVariants.OUTLINED}
                  >
                    <GoogleIcon />
                    Continue with Google
                  </Button>
                  <Button
                    className="input-label"
                    variant={ButtonVariants.OUTLINED}
                  >
                    <AppleIcon />
                    Continue with Apple
                  </Button>
                </Box>
                <Box className="flex-center sign-up-box">
                  <Typography
                    className="input-label text-center"
                    variant="body1"
                    gutterBottom
                  >
                    Don't have an account?
                    <Link href="/signup" className="link sign-up">
                      Sign Up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
