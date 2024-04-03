import { FC } from "react";
import { Box, Card, CardContent, Grid, styled } from "@mui/material";
import { StyledBackgroundBox } from "./aboutUs";

const CardHeaderStyle = 
{ 
  display:"flex", 
  alignItems:"center", 
  justifyContent:"space-between" 
}

 export const StyledBox = styled(Box) ({
  margin: "25px 15px 20px",
  ".flex-center": {
    display: "block",
  },
  "@media(min-width: 480px)": {
    margin: "40px 25px 20px",
  },
  "@media(min-width: 768px)": {
    margin: "40px 40px 20px",
    ".flex-center": {
      display: "flex",
      alignItems: "center",
    },
    ".para-text-holder,.heading-text": {
      flex: '1',
    },
    ".para-text-holder .para-text": {
      marginLeft: "auto",
    },
  },
  "@media(min-width: 900px)": {
    ".para-text-holder .para-text": {
      maxWidth: "390px",
    },
  },
  "@media(min-width: 1080px)": {
    ".para-text-holder .para-text": {
      maxWidth: "450px",
    },
  },
  "@media(min-width: 1260px)": {
    ".para-text-holder .para-text": {
      maxWidth: "500px",
    },
  },
  "@media(min-width: 1800px)": {
    ".para-text-holder .para-text": {
      maxWidth: "650px",
    },
  },
});

export const OurServices: FC = () => {
  return (
    <StyledBox>
      <StyledBackgroundBox className="content-box no-background">
        <h4 className="sub-heading-text">
          <span className="line-span-holder">
            <span className="line-span"/>
            <span className="line-span"/>
          </span>
          OUR SERVICES
        </h4>
        <Box className="flex-center">
          <Box className="content-holder">
            <h1 className="heading-text">Build Everything You Needs</h1>
          </Box>
          <Box className="para-text-holder">
            <p className="para-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s
            </p>
          </Box>
        </Box>
        <Grid container spacing={1} style={{ marginTop: "20px" }}>
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent style={{ borderBottom: "5px solid #39C64E", borderRadius: "0", padding: "40px 15px" }}>
                <Box sx={CardHeaderStyle}>
                  <h4 className="sub-heading-text black-color">Lorem<br />Ipsum001</h4>
                  <img src="../../src/assets/Group 2.svg" style={{ width: "30px" }} />
                </Box>
                <p className="para-text" style={{ marginBottom: "0" }}>
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent style={{ borderBottom: "5px solid #39C64E", borderRadius: "0", padding: "40px 15px" }}>
                <Box sx={CardHeaderStyle}>
                  <h4 className="sub-heading-text black-color">Lorem<br />Ipsum001</h4>
                  <img src="../../src/assets/Group 2.svg" style={{ width: "30px" }} />
                </Box>
                <p className="para-text" style={{ marginBottom: "0" }}>
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent style={{ borderBottom: "5px solid #39C64E", borderRadius: "0", padding: "40px 15px" }}>
                <Box sx={CardHeaderStyle}>
                  <h4 className="sub-heading-text black-color">Lorem<br />Ipsum001</h4>
                  <img src="../../src/assets/Group 2.svg" style={{ width: "30px" }} />
                </Box>
                <p className="para-text" style={{ marginBottom: "0" }}>
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent style={{ borderBottom: "5px solid #39C64E", borderRadius: "0", padding: "40px 15px" }}>
                <Box sx={CardHeaderStyle}>
                  <h4 className="sub-heading-text black-color">Lorem<br />Ipsum001</h4>
                  <img src="../../src/assets/Group 2.svg" style={{ width: "30px" }} />
                </Box>
                <p className="para-text" style={{ marginBottom: "0" }}>
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent style={{ borderBottom: "5px solid #39C64E", borderRadius: "0", padding: "40px 15px" }}>
                <Box sx={CardHeaderStyle}>
                  <h4 className="sub-heading-text black-color">Lorem<br />Ipsum001</h4>
                  <img src="../../src/assets/Group 2.svg" style={{ width: "30px" }} />
                </Box>
                <p className="para-text" style={{ marginBottom: "0" }}>
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardContent style={{ borderBottom: "5px solid #39C64E", borderRadius: "0", padding: "40px 15px" }}>
                <Box sx={CardHeaderStyle}>
                  <h4 className="sub-heading-text black-color">Lorem<br />Ipsum001</h4>
                  <img src="../../src/assets/Group 2.svg" style={{ width: "30px" }} />
                </Box>
                <p className="para-text" style={{ marginBottom: "0" }}>
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </p>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </StyledBackgroundBox>
    </StyledBox>
  );
};
