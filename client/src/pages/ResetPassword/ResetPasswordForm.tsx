import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import authImage1  from "../../assets/Rectangle 2-2.png";
import authImage2  from "../../assets/Rectangle 3-2.png";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";


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
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Container style = {{ maxWidth: 608 }}>
          <img src={authImage1} alt="Image 1" style={{ width: '100%' }} />
          <img src={authImage2} alt="Image 2" style={{ width: '100%', marginTop: '-275px' }} />
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
            Reset Password
          </Typography>
          <InputField
            label="New Password"
            type={showPassword ? "text" : "password"}
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
          <Button variant={ButtonVariants.OUTLINED}>Reset Password</Button>
        </Container>
      </Container>
    </form>
  );
};
