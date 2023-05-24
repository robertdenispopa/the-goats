// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Rec from "./img/rec.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(4),
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(${Rec})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: theme.palette.common.white,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "3rem",
  },
  description: {
    marginBottom: theme.spacing(4),
    fontSize: "1.2rem",
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(1.5, 4),
    fontSize: "1.2rem",
  },
}));

const Reconditioning = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
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
