import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-3 shadow-lg w-full fixed top-0 bg-transparent z-10">
      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: "bold", color: "black" }}
      >
        Humaria
      </Typography>

      <div className="flex space-x-6 items-center">
        <a href="#home" className="text-blue-800 hover:text-white font-medium">
          Home
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="#service"
          className="text-blue-800 hover:text-white font-medium"
        >
          Service
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="#contact"
          className="text-blue-800 hover:text-white font-medium"
        >
          Contact Us
        </a>
      </div>

      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIcon />}
        sx={{
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          color: "black",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        BOOK A CALL
      </Button>
    </div>
  );
};

export default Navbar;
