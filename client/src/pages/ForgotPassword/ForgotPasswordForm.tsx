import {
  Button,
  Container,
  Typography,
} from "@mui/material";
import { InputField } from "../../components/inputs";
import { ButtonVariants } from "../../components/constants";
import authImage1  from "../../assets/Rectangle 2-1.png";
import authImage2  from "../../assets/Rectangle 3-1.png";


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
            Forgot your password?
          </Typography>
          <Typography >
            Enter your email address or phone number and we’ll help you reset your password.
          </Typography>
          <InputField
            label="Email address or phone number"
          />
          <Button variant={ButtonVariants.OUTLINED}>Reset Password</Button>
        </Container>
      </Container>
    </form>
  );
};
