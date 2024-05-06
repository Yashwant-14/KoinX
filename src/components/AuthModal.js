import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AppBar, Tab, Tabs } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

export default function AuthModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-gradient-to-br from-blue-900 to-blue-500 text-white rounded-md font-bold transition-transform transform hover:scale-110 "
      >
        Get Started
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>
          {value == 0 && <Login handleClose={handleClose} />}
          {value == 1 && <Signup handleClose={handleClose} />}
        </Box>
      </Modal>
    </div>
  );
}
