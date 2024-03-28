import { FC } from "react";
import { Box, Button, Container } from "@mui/material";
import { Header } from "./header";

export const Dashboard: FC = () => {
  return (
    <Box sx={{ backgroundImage: "url('../../src/assets/IMG-20240325-WA0007.jpg')" }}>
      <Header/>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <img src="../../src/assets/Rectangle 1361.png"/>
        <h4>GENERAL CONTRACTING</h4>
      </Container>
      <h1>Build Everything You Needs</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s</p>
      <Button color="inherit">Get a Quote</Button>
    </Box>
  );
};
