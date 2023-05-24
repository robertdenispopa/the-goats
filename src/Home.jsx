// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TG from "./img/the-goats.avif";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(4),
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.main,
  },
  title: {
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  description: {
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white,
  },
  button: {
    margin: theme.spacing(2),
  },
  image: {
    width: "50%",
    height: "auto",
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" component="h1" className={classes.title}>
            Welcome to The Goats
          </Typography>
          <Typography variant="h6" className={classes.description}>
            We are dedicated to collecting degraded and unused clothes and
            textiles for recycling into high-quality new products. Join us in
            our mission to promote sustainability and reduce waste.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={TG} alt="Home Image" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
