import { FC, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientBox = styled(Box)(() => ({
  background: "linear-gradient(to bottom, black, green)",
}));

export const Footer: FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can implement the logic to submit the email (e.g., send it to your backend)
    console.log("Email submitted:", email);
    // Clear the email field after submission
    setEmail("");
  };
  return (
    <GradientBox>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Container>
          <img src="../../src/assets/EmartechLogo.png"/>
          <p>
            Lorem Ipsum is simply dummy 
            text of the printing and typesetting 
            industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s
          </p>
        </Container>
        <Container>
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../src/assets/Rectangle 1361 (2).png"/>
            <h4>INFORMATION</h4>
          </Container>
          <p>ABOUT US</p>
          <p>PRIVACY POLICY</p>
          <p>FAQ’S</p>
        </Container>
        <Container>
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../src/assets/Rectangle 1361 (2).png"/>
            <h4>CONTACTS INFO</h4>
          </Container>
          <p>Box No. 214396, Deira, Dubai</p>
          <p>+971 456 7890 - Office</p>
          <p>Info@gmail.com</p>

          <Container sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../src/assets/Vector.png"/>
            <img src="../../src/assets/Vector (1).png"/>
            <img src="../../src/assets/Vector (2).png"/>
          </Container>
        </Container>
        <Container>
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../src/assets/Rectangle 1361 (2).png"/>
            <h4>NEWSLETTER</h4>
          </Container>
          <p>ENTER YOUR EMAIL TO RECEIVE DAILY NEWS.</p>
          <TextField
            label="Enter your email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Subscribe
          </Button>
        </Container>
      </Box>
      <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center" }}>
        All rights reserved@ Emartech 2024</Box>
    </GradientBox>
  );
};
