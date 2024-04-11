import React from "react";
import { useStyles } from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import CustomButton from "../Button";
import { useNavigate } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DogCard = ({ dog }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dog-details", { state: { dog } });
  };

  const breedName = dog?.breeds.map((breed) => breed.name);
  const groupDog = dog?.breeds.map((breed) => breed.breed_group);
  const lifeSpan = dog?.breeds.map((breed) => breed.life_span);

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={dog?.url}
        alt="Dogs"
        className={classes.card_image}
      />
      <CardContent>
        <Typography className={classes.breedName}>{breedName}</Typography>
        <Box display="flex" sx={{ minHeight: "30px" }}>
          {groupDog && groupDog[0] !== undefined && (
            <>
              <Typography className={classes.label}>Group breed:</Typography>
              <Typography className={classes.innerTitle}>{groupDog}</Typography>
            </>
          )}
        </Box>
      </CardContent>
      <CardActions className={classes.card_actions}>
        <Box display="flex">
          <Typography className={classes.label}>Life Span:</Typography>
          <Typography className={classes.innerTitle}> {lifeSpan}</Typography>
        </Box>
        <CustomButton
          handleChange={handleNavigate}
          label={"View"}
          icon={<ArrowForwardIcon sx={{ fontSize: "14px !important" }} />}
        />
      </CardActions>
    </Card>
  );
};

export default DogCard;
