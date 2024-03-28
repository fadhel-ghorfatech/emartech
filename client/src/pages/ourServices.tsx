import { FC } from "react";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";


const CardHeaderStyle = 
{ 
  display:"flex", 
  alignItems:"center", 
  justifyContent:"space-between" 
}

export const OurServices: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection:"column" }}>
      <Container>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <img src="../../src/assets/Rectangle 1361 (1).png"/>
          <h4>OUR SERVICES</h4>
        </Container>
        <Box sx={{ display: "flex" }}>
          <h1>Build Everything You Needs</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s
          </p>
        </Box>
      </Container>
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
    </Box>
  );
};
