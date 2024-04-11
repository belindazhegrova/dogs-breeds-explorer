import { Grid, Skeleton } from "@mui/material";
import React from "react";

const DogsCardPlaceholder = ({ index }) => {
  return (
    <Grid item sm={6} xs={12} md={4} lg={4} key={index}>
      <Skeleton variant="rectangular" width="100%" height={270} />
      <Skeleton variant="text" width={200} sx={{ mt: 1 }} />
      <Skeleton variant="text" width={150} sx={{ mt: 0.5 }} />
      <Skeleton variant="text" width={100} sx={{ mt: 0.5 }} />
    </Grid>
  );
};

export default DogsCardPlaceholder;
