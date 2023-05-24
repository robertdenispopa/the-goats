// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import DonationsIMG from "./img/donations.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(4),
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  image: {
    width: "50%",
    height: "auto",
    marginBottom: theme.spacing(4),
    borderRadius: theme.spacing(1), // Add a border radius for a more rounded look
    boxShadow: theme.shadows[2],
  },
}));

const Donations = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" component="h1" className={classes.title}>
          Donate Your Clothes
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Help us in our mission to recycle and repurpose clothes by donating
          your unused items. Together, we can make a positive impact on the
          environment and support sustainability.
        </Typography>
        <Box
          className={classes.image}
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 133, md: 67 },
            maxWidth: { xs: 250, md: 150 },
          }}
          alt="Donation Image"
          src={DonationsIMG}
        />

        <Typography variant="body1" className={classes.description}>
          By donating your clothes, you are contributing to reducing textile
          waste and promoting a more sustainable future. Every item donated
          makes a difference.
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Donate Now
        </Button>
      </Container>
    </div>
  );
};

export default Donations;
