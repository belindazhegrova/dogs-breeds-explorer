import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./styles";

const CustomButton = ({ handleChange, icon, label, customHeight }) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      className={classes.button}
      endIcon={icon}
      onClick={handleChange}
      sx={{
        width: !icon ? "100%" : null,
        minHeight: customHeight ? `${customHeight}` : null,
        fontSize: icon ? "16px" : "20px",
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
