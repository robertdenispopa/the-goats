// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: "100px",
    position: "fixed",
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <RouterLink to="/" className={classes.link}>
              The Goats
            </RouterLink>
          </Typography>
          <Hidden xsDown>
            <Button component={RouterLink} to="/shop" color="inherit">
              Shop
            </Button>
            <Button component={RouterLink} to="/donations" color="inherit">
              Donations
            </Button>
            <Button component={RouterLink} to="/reconditioning" color="inherit">
              Reconditioning
            </Button>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} The Goats. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" align="right">
            Made with ❤️ by{" "}
            <Link href="https://yourwebsite.com">Denis Popa</Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export { Menu, Footer };
