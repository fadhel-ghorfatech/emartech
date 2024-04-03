import { FC } from "react";
import { Box, Container } from "@mui/material";
import { StyledBackgroundBox } from "./aboutUs";

export const OurPartners: FC = () => {
  return (
    <StyledBackgroundBox className="content-box no-background" sx={{ display: "flex", flexDirection:"column", alignItems: "center" }}>
      <Container sx={{ display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h4 className="sub-heading-text">
            <span className="line-span-holder">
              <span className="line-span"/>
              <span className="line-span"/>
            </span>
            OUR PARTNERS
            <span className="line-span-holder">
              <span className="line-span"/>
              <span className="line-span"/>
            </span>
          </h4>
        </Box>
        <h1>Build Everything You Need</h1>
      </Container>
      <Box sx={{ display:"flex" }}>
        <Box>
          <img src="../../src/assets/Rectangle 1371.png" style={{ maxWidth: "100%", width: "auto", height: "100%" }}/>
        </Box>
        <Box>
          <img src="../../src/assets/Rectangle 1372.png" style={{ maxWidth: "100%", width: "auto", height: "100%" }}/>
        </Box>
        <Box>
          <img src="../../src/assets/Rectangle 1373.png" style={{ maxWidth: "100%", width: "auto", height: "100%" }}/>
        </Box>
        <Box>
          <img src="../../src/assets/Rectangle 1374.png" style={{ maxWidth: "100%", width: "auto", height: "100%" }}/>
        </Box>
      </Box>
    </StyledBackgroundBox>
  );
};
