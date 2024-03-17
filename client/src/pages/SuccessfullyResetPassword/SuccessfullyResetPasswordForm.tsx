import {
  Box,
  Container,
  Typography,
  styled
} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import authImage1  from "../../assets/Rectangle 2-4.png";
import authImage2  from "../../assets/Rectangle 3-4.png";
import emarTechLogo  from "../../assets/emartech-logo.png";

const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('../../src/assets/success-reset-password-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});

export const SuccessfullyResetPasswordForm = () => {
  return (
    <Container className="max-w-100 space-0 main-container">
      <form autoComplete="off">
        <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
          <Container className="space-0 image-container d-mobile-none">
            <StyledBackgroundBox className="min-h-100vh image">
            </StyledBackgroundBox>
          </Container>
          <Container className="content-container d-flex justify-center">
            <Box className="auth-container flex-center">
              <img className="emar-logo" src={emarTechLogo} alt="EmarTech Logo" />
              <DoneIcon/>
              <Typography className="auth-heading">
                Congratulations!
              </Typography>
              <Typography className="auth-heading">
                Your Password Is Successfully Reset.
              </Typography>
            </Box>
          </Container>
        </Container>
      </form>
    </Container>
  );
};
