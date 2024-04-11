import React from "react";
import {
  OutlinedInput,
  MenuItem,
  FormControl,
  ListItemText,
  Checkbox,
  Select,
} from "@mui/material";
import { useStyles } from "./styles";

const breed_group = [
  "Working",
  "Hound",
  "Mixed",
  "Herding",
  "Non-sporting",
  "Sporting",
  "Terrier",
  "Toy",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  sx: {
    "&& .Mui-selected": {
      backgroundColor: "#f7eed3",
      "&:hover": {
        backgroundColor: "#f7eed3",
      },
    },
  },
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomFilter = ({ filterDog, handleChange }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          displayEmpty
          value={filterDog}
          onChange={handleChange}
          className={classes.select}
          input={<OutlinedInput className={classes.filter_input} />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Filter by group breed..</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {breed_group.map((group) => (
            <MenuItem key={group} value={group}>
              <Checkbox
                checked={filterDog.indexOf(group) > -1}
                className={classes.check_box}
              />
              <ListItemText primary={group} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomFilter;
