import { Grid, Typography, Button, CardMedia, Chip } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useStyles } from "./styles";
import Header from "../../components/Header";

const DogDetails = () => {
  const classes = useStyles();
  const location = useLocation();

  const { dog } = location.state;

  const breedName = dog?.breeds.map((breed) => breed.name);
  const breedFor = dog?.breeds.map((breed) => breed.bred_for);
  const weightImperial = dog?.breeds.map((breed) => breed?.weight?.imperial);
  const weightMetric = dog?.breeds.map((breed) => breed.weight?.metric);
  const temperamentDogs = dog?.breeds?.map((breed) => breed?.temperament);

  // split temperament data string into individual words
  const temperamentWords = temperamentDogs.flatMap((temperament) =>
    temperament.split(",").map((word) => word.trim())
  );

  return (
    <>
      <Grid container className={classes.dog_details_header}>
        <Grid item xs={6} className={classes.dog_details_button}>
          <Link to="/">
            <Button
              className={classes.back_button}
              startIcon={
                <ArrowBackIosIcon sx={{ fontSize: "14px !important" }} />
              }
            >
              Back Home
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} className={classes.dog_details_inner_header}>
          <Header />
        </Grid>
      </Grid>

      <Grid container className={classes.dog_details_container}>
        <Grid item xs={12} lg={6} md={6} sm={12}>
          <CardMedia
            component="img"
            image={dog?.url}
            className={classes.dog_details_image}
            alt="Dogs"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          sm={12}
          className={classes.data_container}
        >
          <Typography className={classes.dog_name}>{breedName}</Typography>
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Typography className={classes.label}>Breed for:</Typography>
              <Typography className={classes.custom_data}>
                {breedFor}
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography className={classes.label}>Weight:</Typography>
              <Grid item display="flex">
                <Typography
                  className={classes.custom_data}
                >{`${weightImperial} Imperial`}</Typography>
                <Typography
                  sx={{ ml: 3 }}
                  className={classes.custom_data}
                >{`${weightMetric} Metric`}</Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography className={classes.label}>Temperament:</Typography>
              <Grid container display="flex">
                {temperamentWords.map((word, index) => (
                  <Grid item key={index} sx={{ mr: 2, mt: 1 }}>
                    <Chip label={word} className={classes.custom_chip} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Typography className={classes.dog_desc}>
                Keeping a dog brings joy, companionship, and countless health
                benefits. Dogs offer unconditional love, reduce stress,
                encourage physical activity, and provide a sense of security.
                Plus, they're always there to greet you with a wagging tail,
                making each day brighter.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DogDetails;
