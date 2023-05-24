// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(4),
    height: "80vh", // Set the height to full screen
    display: "flex", // Use flexbox to fill the screen vertically
    alignItems: "center", // Center the content vertically
    justifyContent: "center", // Center the content horizontally
    // width: "100%",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" component="h1" className={classes.title}>
            Welcome to The Goats
          </Typography>
          <Typography variant="body1" className={classes.description}>
            We are dedicated to collecting degraded and unused clothes and
            textiles for recycling into high-quality new products. Join us in
            our mission to promote sustainability and reduce waste.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="/path/to/your/image.jpg"
            alt="Home Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
