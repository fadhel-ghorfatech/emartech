import { FC, ReactNode } from "react"
import { Container, Box, styled } from "@mui/material"
import emarTechLogo from "../../assets/emartech-logo.png";

interface AuthenticationWrapperProps {
  children: ReactNode;
  backgroundImageUrl?: string;
}

const StyledBackgroundBox = styled(Box)<any>(({ backgroundImageUrl }) => ({
  backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "url('../../src/assets/signup.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
}));
export const AuthenticationWrapper: FC<AuthenticationWrapperProps> = ({ children, backgroundImageUrl }) => {
  return (
    <Container className="max-w-100 space-0 main-container">
      <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
        <Container className="space-0 image-container d-mobile-none">
          {/* Pass backgroundImageUrl to the styled component */}
          <StyledBackgroundBox className="min-h-100vh image" backgroundImageUrl={backgroundImageUrl}/>
        </Container>
        <Container className="content-container d-flex justify-center">
          <Box className="auth-container flex-center">
            <img
              alt="EmarTech Logo"
              className="emar-logo"
              src={emarTechLogo}
            />
            <Box>
              {children}
            </Box>
          </Box>
        </Container>
      </Container>
    </Container>
  )
};
