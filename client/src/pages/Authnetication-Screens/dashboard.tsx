import { FC } from "react";
import { Box, Button } from "@mui/material";
import { Header } from "./index";

export const Dashboard: FC = () => {
  return (
    <Box sx={{ backgroundImage: "url('../../../src/assets/IMG-20240325-WA0007.jpg')" }}>
      <Header/>
      <h4>GENERAL CONTRACTING</h4>
      <h1>Build Everything You Needs</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s</p>
      <Button color="inherit">Get a Quote</Button>
    </Box>
  );
};
