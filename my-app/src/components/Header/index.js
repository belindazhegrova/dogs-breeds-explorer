import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as DogIcon } from "../../assets/icons/iconDog.svg";
import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Box className={classes.icon_header}>
        <DogIcon />
      </Box>
      <Typography className={classes.title_header}>Dogs Breeds</Typography>
    </Box>
  );
};

export default Header;
