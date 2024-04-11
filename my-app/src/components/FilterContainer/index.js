import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomFilter from "../Inputs/Filter";
import { useStyles } from "./styles";
import CustomButton from "../Button";

const FilterContainer = ({
  filterDogsByBreedFor,
  filterDog,
  handleChange,
  resetFilter,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.filter_container}>
      <Grid item xs={12} lg={6} md={4} sm={12}>
        <Typography className={classes.label_filter}>Breed</Typography>
        <CustomFilter filterDog={filterDog} handleChange={handleChange} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        md={4}
        sm={6}
        className={classes.button_containter}
      >
        <CustomButton
          customHeight={"56px"}
          label={"Filter"}
          handleChange={filterDogsByBreedFor}
        />
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        md={4}
        sm={6}
        className={classes.resetButton_container}
      >
        <CustomButton
          customHeight={"56px"}
          label={"Reset Filter"}
          handleChange={resetFilter}
        />
      </Grid>
    </Grid>
  );
};

export default FilterContainer;
