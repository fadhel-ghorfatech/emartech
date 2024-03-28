import { FC } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Rating } from "@mui/material";

export const Testimonial: FC = () => {
  return (
    <Box  sx={{ backgroundImage: "url('../../src/assets/Rectangle 1378.png')" }}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <img src="../../src/assets/Rectangle 1361 (1).png"/>
        <h4>TESTIMONIAL</h4>
      </Container>
      <h1> Build Everything You Needs </h1>
      <Box sx={{ display:"flex" }}>
        <Container>
          <Card sx={{ maxWidth: 345, position: "relative", marginBottom: 2, overflow: "visible" }}>
            <img
              src="../../src/assets/Rectangle 48.jpg"
              alt="Lorem Ipsum" style={{ position: "absolute", top: -30, right: 20 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {"Lorem Ipsum"}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {"Lorem Ipsum"}
              </Typography>
              <Rating name="read-only" value={4} readOnly />
              <Typography variant="body2" color="text.secondary">
                {"Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been."}
              </Typography>
            </CardContent>
          </Card>
        </Container>
        <Container>
          <Card sx={{ maxWidth: 345, position: "relative", marginBottom: 2, overflow: "visible" }}>
            <img
              src="../../src/assets/Rectangle 48.jpg"
              alt="Lorem Ipsum" style={{ position: "absolute", top: -30, right: 20 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {"Lorem Ipsum"}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {"Lorem Ipsum"}
              </Typography>
              <Rating name="read-only" value={5} readOnly />
              <Typography variant="body2" color="text.secondary">
                {"Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been."}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};
