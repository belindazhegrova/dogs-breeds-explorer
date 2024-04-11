import React from "react";
import { OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";

const SearchBar = ({ searchQuery, handleSearchInputChange }) => {
  const classes = useStyles();
  return (
    <OutlinedInput
      placeholder="Search"
      className={classes.search_input}
      value={searchQuery}
      onChange={handleSearchInputChange}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
