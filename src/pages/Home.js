import React from "react";
import app from "../firebase/base";
import { Button, Typography, Grid } from "@material-ui/core";

const Home = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h3">Home</Typography>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => app.auth().signOut()}
      >
        Sign out
      </Button>
    </Grid>
  );
};

export default Home;
