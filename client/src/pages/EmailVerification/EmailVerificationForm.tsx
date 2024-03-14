import {
  Container,
  Link,
  Typography,
} from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import authImage1  from "../../assets/Rectangle 2-3.png";
import authImage2  from "../../assets/Rectangle 3-3.png";


export const EmailVerificationForm = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Container style = {{ maxWidth: 608 }}>
        <img src={authImage1} alt="Image 1" style={{ width: '100%' }} />
        <img src={authImage2} alt="Image 2" style={{ width: '100%', marginTop: '-275px' }} />
      </Container>
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <EmailRoundedIcon/>
        <Typography sx={{
          fontFamily: 'Poppins', 
          fontSize: '34px',
          fontWeight: 500, 
          lineHeight: '51px',
          letterSpacing: '0em', 
          textAlign: 'left',
          alignSelf: 'center'
        }}>
          Check Your Inbox!
        </Typography>
        <Typography >
          We’ve sent you a reset password link to i**********6@gm***.com
        </Typography>
        <Link style={{ textDecoration: 'none' }}>
          Need help?
        </Link>
      </Container>
    </Container>
  );
};
