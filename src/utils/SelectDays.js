// SelectDays.tsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectDays = ({ days, handleDaysChange }) => {
  return (
    <div className="flex items-center ml-4 ">
      <p className="mr-3 text-lg font-semibold">Price Change In</p>
      <Select
        sx={{
          height: "2.5rem",
          width: "7.4rem",
          color: "var(--black)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--black)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--black)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={240}>240 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
};

export default SelectDays;
