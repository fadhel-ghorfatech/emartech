import { FC } from "react";
import { Toolbar, Button, Box, MenuItem, Select } from "@mui/material";

export const Header: FC = () => {
  return (
    <Box>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <img
            src={"../../src/assets/emartech-logo.png"}
            alt="logo" style={{ width: 120, height: 40, marginRight: 1 }} />
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={"en"}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
          </Select>
          <Button color="inherit">CONTACTS</Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
