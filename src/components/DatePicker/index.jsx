import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DatePicker({ value, handleChange }) {
  return (
    <FormControl>
      <InputLabel>Date</InputLabel>
      <Select
        value={value}
        label="Date"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <MenuItem value={7}>1 Week</MenuItem>
        <MenuItem value={14}>2 Week</MenuItem>
        <MenuItem value={30}>1 Month</MenuItem>
      </Select>
    </FormControl>
  );
}
