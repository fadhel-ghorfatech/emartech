import { FC } from "react";
import { Box } from "@mui/material";
import { Dashboard } from "./dashboard";
import { AboutUs } from "./aboutUs";
import { ContactUs } from "./contactUs";
import { Footer } from "./footer";
import { OurPartners } from "./ourPartners";
import { OurServices } from "./ourServices";
import { Testimonial } from "./testimonial";

export const LandingPage: FC = () => {
  return (
    <Box>
      <Dashboard/>
      <AboutUs/>
      <OurServices/>
      <OurPartners/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
    </Box>
  );
};
