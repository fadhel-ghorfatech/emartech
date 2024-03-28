import { FC, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";

export const ContactUs: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <img src="../../src/assets/Rectangle 1361 (1).png"/>
        <h4>CONTACT US</h4>
      </Container>
      <Box  sx={{ display: "flex", alignItems: "center" }}>
        <Container>
          <h1> Request A Quote For Your Work </h1>
          <TextField
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Send Now
          </Button>
        </Container>
        <Container>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s
          </p>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../src/assets/Phone.png"/>
            <Container>
              <h4>OUR PHONE</h4>
              <p>+971 456 7890 - Office</p>
              <p>+971 456 7890 - Fax</p>
            </Container>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../src/assets/Email.png"/>
            <Container>
              <h4>OUR EMAIL</h4>
              <p>sales@gmail.com</p>
              <p>info@gmail.com</p>
            </Container>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../src/assets/Location on.png"/>
            <Container>
              <h4>OUR LOCATION</h4>
              <p>Box No. 214396, Dubai</p>
            </Container>
          </Box>
        </Container>
      </Box>
    </form>
  );
};
