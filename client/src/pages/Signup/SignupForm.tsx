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
} from "@mui/material";
import { Icon } from "@iconify/react";
import { FieldTitle, InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import authImage1  from "../../assets/Rectangle 2-5.png";
import authImage2  from "../../assets/Rectangle 3-5.png";
import MuiPhoneNumber from 'material-ui-phone-number-2'


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
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1300px' }}>
        <Container style = {{ maxWidth: 608 }}>
          <img src={authImage1} alt="Image 1" style={{ width: '100%' }} />
          <img src={authImage2} alt="Image 2" style={{ width: '100%', marginTop: '-290px' }} />
        </Container>
        <Container style={{ display: 'flex', flexDirection: 'column'}}>
          <Typography sx={{
            fontFamily: 'Poppins', 
            fontSize: '34px',
            fontWeight: 500, 
            lineHeight: '51px',
            letterSpacing: '0em', 
            textAlign: 'left',
            alignSelf: 'center'
          }}>
            Signup
          </Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
            <Box style={{ display: 'flex', flexDirection: 'column'}}>
              <InputField
                label="First Name"
              />
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                isRequired={true}
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
              />
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column'}}>
              <InputField
                label="Last Name"
              />
              <InputField
                label="Confirm Password"
                type={confirmPassword ? "text" : "password"}
                isRequired={true}
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
          <Box sx={{ display: 'flex', alignItems: "center"}}>
            <Checkbox size="small"/>
            I accept the 
            <Link  style={{ textDecoration: 'none', marginLeft: '5px', marginRight: '5px' }}>
              Terms and Conditions
            </Link>
            and
            <Link  style={{ textDecoration: 'none', marginLeft: '5px' }}>
              Privacy Policy.
            </Link>
          </Box>
          <Button variant={ButtonVariants.OUTLINED}>Signup</Button>
        </Container>
      </Container>
    </form>
  );
};
