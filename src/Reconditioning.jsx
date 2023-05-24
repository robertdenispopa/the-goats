// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(4),
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
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
}));

const Reconditioning = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h2" component="h1" className={classes.title}>
          Reconditioning Services
        </Typography>
        <Typography variant="body1" className={classes.description}>
          We offer embroidery and printing services to give your clothes a fresh
          new look. Customize your garments with logos, designs, or text to make
          them truly unique.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href="/reconditioning-form"
        >
          Request Service
        </Button>
      </Container>
    </div>
  );
};

export default Reconditioning;
