import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  styled
} from "@mui/material";
import { Icon } from "@iconify/react";
import { FieldTitle, InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import MuiPhoneNumber from 'material-ui-phone-number-2'
import emarTechLogo  from "../../assets/emartech-logo.png";

const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('../../src/assets/auth-signup-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});

export const SignupForm = () => {
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

  const handleOnChange = async (event: any) => {
    // Handle phone number logic
  }
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
                Signup
              </Typography>
              <Box className="flex-center justify-between sm-flex-col">
                <Box className="form-container flex-center mr-10">
                  <InputField
                    label="First Name"
                    labelClassName="input-label"
                  />
                  <InputField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    isRequired={true}
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
                    label="Email"
                    labelClassName="input-label"
                  />
                </Box>
                <Box className="form-container flex-center ml-10">
                  <InputField
                    label="Last Name"
                    labelClassName="input-label"
                  />
                  <InputField
                    label="Confirm Password"
                    type={confirmPassword ? "text" : "password"}
                    isRequired={true}
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
                  <FieldTitle
                    label="Phone Number"
                    className="input-label"
                  />
                  <MuiPhoneNumber 
                    variant="outlined" 
                    countryCodeEditable={false} 
                    disableAreaCodes={true} 
                    defaultCountry={'us'} 
                    onChange={handleOnChange}
                    
                  />
                </Box>
              </Box>
              <Box className="flex-center justify-start input-label">
                <Typography className="input-label" variant="body1" gutterBottom>
                  <Checkbox size="small"/>
                  I accept the 
                  <Link className="link sign-up">
                    Terms and Conditions
                  </Link>
                  and
                  <Link className="link sign-up">
                    Privacy Policy.
                  </Link>
                </Typography>
              </Box>
              <Button variant={ButtonVariants.OUTLINED} className="auth-btn input-label">Signup</Button>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
