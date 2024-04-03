import { FC, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledBackgroundBox } from "./aboutUs";
import { StyledBoxContact } from "./contactUs";

const StyledBoxFooter = styled(StyledBoxContact) ({
  margin: "0 !important",
  ".content-holder": {
    ".MuiFormLabel-root": {
      color: "#fff",
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    }
  },
});

const FooterBox = styled(StyledBackgroundBox) ({
  margin: "0",
  "&.content-box": {
    display: "block",
  },
  ".sub-heading-text": {
    margin: "10px 0 30px 0",
  },
  "@media(min-width: 768px)": {
    
  },
});

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
      <FooterBox className="content-box no-background">
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "row" }}>
          <Box style={{ flexBasis: "25%", margin: "0px 10px 0 0" }}>
            <img src="../../../src/assets/emartech-logo-white.svg" />
            <p className="para-text white-color">
              Lorem Ipsum is simply dummy 
              text of the printing and typesetting 
              industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s
            </p>
          </Box>
          
          <Box style={{ flexBasis: "25%", margin: "0px 5px 0 0" }}>
            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span white"/>
                <span className="line-span white"/>
              </span>
              INFORMATION
            </h4>
            <p className="para-text white-color">ABOUT US</p>
            <p className="para-text white-color">PRIVACY POLICY</p>
            <p className="para-text white-color">FAQ’S</p>
          </Box>

          <Box style={{ flexBasis: "25%", margin: "0px 5px 0 0" }}>
            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span white"/>
                <span className="line-span white"/>
              </span>
              CONTACTS INFO
            </h4>

            <p className="para-text white-color">Box No. 214396, Deira, Dubai</p>
            <p className="para-text white-color">+971 456 7890 - Office</p>
            <p className="para-text white-color">Info@gmail.com</p>
            <Box>
              <img src="../../src/assets/Vector.png" style={{ margin: "0 15px 0 0" }}/>
              <img src="../../src/assets/Vector (1).png" style={{ margin: "0 15px 0 0" }}/>
              <img src="../../src/assets/Vector (2).png" style={{ margin: "0 15px 0 0" }}/>
            </Box>
          </Box>

          <StyledBoxFooter style={{ flexBasis: "25%", margin: "0px 5px 0 0" }}>
            <h4 className="sub-heading-text">
              <span className="line-span-holder">
                <span className="line-span white"/>
                <span className="line-span white"/>
              </span>
              NEWSLETTER
            </h4>
            <p className="para-text white-color">ENTER YOUR EMAIL TO RECEIVE DAILY NEWS.</p>
            <Box className="content-holder">
              <TextField
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
              />
              <Button className="para-text white-color auth-btn radius-0" variant="contained" color="primary" onClick={handleSubmit}>
                Subscribe
              </Button>
            </Box>
          </StyledBoxFooter>
        </Box>
        <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center", marginTop: "40px" }}>
          <p className="para-text white-color">All rights reserved@ Emartech 2024</p>
        </Box>
      </FooterBox>
    </GradientBox>
  );
};
