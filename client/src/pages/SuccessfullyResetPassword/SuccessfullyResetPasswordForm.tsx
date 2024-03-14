import {
  Container,
  Typography,
} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import authImage1  from "../../assets/Rectangle 2-4.png";
import authImage2  from "../../assets/Rectangle 3-4.png";


export const SuccessfullyResetPasswordForm = () => {
  return (
    <form autoComplete="off">
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Container style = {{ maxWidth: 608 }}>
          <img src={authImage1} alt="Image 1" style={{ width: '100%' }} />
          <img src={authImage2} alt="Image 2" style={{ width: '100%', marginTop: '-275px' }} />
        </Container>
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <DoneIcon/>
          <Typography sx={{
            fontFamily: 'Poppins', 
            fontSize: '34px',
            fontWeight: 500, 
            lineHeight: '51px',
            letterSpacing: '0em', 
            textAlign: 'left',
            alignSelf: 'center'
          }}>
            Congratulations!
          </Typography>
          <Typography >
            Your Password Is Successfully Reset.
          </Typography>
        </Container>
      </Container>
    </form>
  );
};
