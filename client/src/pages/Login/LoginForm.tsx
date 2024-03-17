import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  styled
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useAuth } from "../../contextProviders/authentication";
import { signInService } from "../../services/userServiceCalls";
import { setUserInLocalStorage } from "../../utils";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import emarTechLogo  from "../../assets/emartech-logo.png";

const StyledBackgroundBox = styled(Box) ({
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

export const LoginForm = () => {
  const { setUser } = useAuth() as any;
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      signInService({
        username,
        password,
      }, (err: any, response: any) => {
        if(err) {
          // Need to handle error case.
        }
        else {
          setUserInLocalStorage(response);
          setUser(response);
        }
      });
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
                Login
              </Typography>
              <Box className="form-container flex-center">
                <InputField
                  label="Email address or phone number"
                  labelClassName="input-label"
                />
                <InputField
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
                />
                <Button variant={ButtonVariants.OUTLINED} className="auth-btn input-label">Login</Button>
              </Box>
              <Box className="link-holder">
                <Link className="link input-label">Forgot Password?</Link>
              </Box>
              <Box>
                <Box className="flex-center position-relative divider-box">
                  <Divider />
                  <Box component={"span"} className="span-content input-label">Or login using</Box>
                </Box>
                <Box className="flex-center flex-col">
                  <Button className="input-label" variant={ButtonVariants.OUTLINED}><GoogleIcon />Continue with Google</Button>
                  <Button className="input-label" variant={ButtonVariants.OUTLINED}><AppleIcon />Continue with Apple</Button>
                </Box>
                <Box className="flex-center sign-up-box">
                  <Typography className="input-label text-center" variant="body1" gutterBottom>
                    Don't have an account?
                    <Link className="link sign-up">
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
