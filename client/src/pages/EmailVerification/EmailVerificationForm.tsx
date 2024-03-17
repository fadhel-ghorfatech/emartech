import {
  Box,
  Container,
  Link,
  Typography,
  styled
} from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import authImage1  from "../../assets/Rectangle 2-3.png";
import authImage2  from "../../assets/Rectangle 3-3.png";
import emarTechLogo  from "../../assets/emartech-logo.png";

const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('../../src/assets/check-inbox-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});

export const EmailVerificationForm = () => {
  return (
    <Container className="max-w-100 space-0 main-container">
      <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
        <Container className="space-0 image-container d-mobile-none">
          <StyledBackgroundBox className="min-h-100vh image">
          </StyledBackgroundBox>
        </Container>
        <Container className="content-container d-flex justify-center">
          <Box className="auth-container flex-center">
            <img className="emar-logo" src={emarTechLogo} alt="EmarTech Logo" />
            <EmailRoundedIcon/>
            <Typography className="auth-heading">
              Check Your Inbox!
            </Typography>
            <Typography className="auth-heading">
              We’ve sent you a reset password link to i**********6@gm***.com
            </Typography>
            <Typography className="input-label text-center" variant="body1" gutterBottom>
              <Link className="link sign-up">
                Need help?
              </Link>
            </Typography>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};
