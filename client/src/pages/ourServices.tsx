import { FC } from "react";
import { Box, Card, CardContent, Grid, Typography, styled } from "@mui/material";
import { StyledBackgroundBox } from "./aboutUs";


const CardHeaderStyle = 
{ 
  display:"flex", 
  alignItems:"center", 
  justifyContent:"space-between" 
}

const StyledBox = styled(Box) ({
  "&.flex-center": {
    display: "block",
  },
  "@media(min-width: 768px)": {
    "&.flex-center": {
      display: "flex",
      alignItems: "stretch",
      margin: "0 40px",
    },
  },
});

export const OurServices: FC = () => {
  return (
    <StyledBox className="flex-center">
      <StyledBackgroundBox className="content-box">
        <h4 className="sub-heading-text">
          <span className="line-span-holder">
            <span className="line-span"/>
            <span className="line-span"/>
          </span>
          OUR SERVICES
        </h4>
        <Box sx={{ display: "flex" }}>
          <h1>Build Everything You Needs</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s
          </p>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ borderBottom: "4px solid green" }}>
                <Box sx={CardHeaderStyle}>
                  <Typography variant="h5" component="h2">
                  Lorem Ipsum001
                  </Typography>
                  <img src="../../src/assets/Group 2.svg"/>
                </Box>
                <Typography color="textSecondary">
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ borderBottom: "4px solid green" }}>
                <Box sx={CardHeaderStyle}>
                  <Typography variant="h5" component="h2">
                   Lorem Ipsum001
                  </Typography>
                  <img src="../../src/assets/Group 2.svg"/>
                </Box>
                <Typography color="textSecondary">
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ borderBottom: "4px solid green" }}>
                <Box sx={CardHeaderStyle}>
                  <Typography variant="h5" component="h2">
                   Lorem Ipsum001
                  </Typography>
                  <img src="../../src/assets/Group 2.svg"/>
                </Box>
                <Typography color="textSecondary">
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ borderBottom: "4px solid green" }}>
                <Box sx={CardHeaderStyle}>
                  <Typography variant="h5" component="h2">
                   Lorem Ipsum001
                  </Typography>
                  <img src="../../src/assets/Group 2.svg"/>
                </Box>
                <Typography color="textSecondary">
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ borderBottom: "4px solid green" }}>
                <Box sx={CardHeaderStyle}>
                  <Typography variant="h5" component="h2">
                   Lorem Ipsum001
                  </Typography>
                  <img src="../../src/assets/Group 2.svg"/>
                </Box>
                <Typography color="textSecondary">
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ borderBottom: "4px solid green" }}>
                <Box sx={CardHeaderStyle}>
                  <Typography variant="h5" component="h2">
                   Lorem Ipsum001
                  </Typography>
                  <img src="../../src/assets/Group 2.svg"/>
                </Box>
                <Typography color="textSecondary">
                Lorem Ipsum is simply dummy text of the 
                printing and typesetting  industry. Lorem
                Ipsum has been  the industry's
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </StyledBackgroundBox>
    </StyledBox>
  );
};
