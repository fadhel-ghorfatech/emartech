import { FC } from "react";
import { Box, Container } from "@mui/material";

export const AboutUs: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Container sx={{ backgroundImage: "url('../../../src/assets/Rectangle 1363.jpg')" }}>
        <h4>ABOUT US</h4>
        <h1>Build Everything You Needs</h1>
        <h1>Build Everything You Needs</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
 industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
 industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s</p>
      </Container>
      <Container sx={{ backgroundImage: "url('../../../src/assets/Rectangle 1364.jpg')" }}>

      </Container>
    </Box>
  );
};
