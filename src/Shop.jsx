// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import T1 from "./img/t1.jpg";
import T2 from "./img/t2.png";
import T3 from "./img/t3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    background: theme.palette.primary.main,
  },
  title: {
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: theme.shadows[6],
    },
  },
  media: {
    height: "100%",
    width: "100%",
    backgroundSize: "contain",
  },
  productName: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  productPrice: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const Shop = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box width="100%">
        <Typography variant="h2" component="h1" className={classes.title}>
          Buy Our Products
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} key={1}>
            <Box className={classes.card}>
              <Box
                className={classes.media}
                component="img"
                src={T1}
                alt="Recycled T-Shirt"
              />
              <Box>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.productName}
                >
                  Recycled T-Shirt
                </Typography>
                <Typography variant="body1" className={classes.productPrice}>
                  Price: $19.99
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                className={classes.addButton}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} key={2}>
            <Box className={classes.card}>
              <Box
                className={classes.media}
                component="img"
                src={T2}
                alt="Recycled T-Shirt"
              />
              <Box>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.productName}
                >
                  Recycled T-Shirt
                </Typography>
                <Typography variant="body1" className={classes.productPrice}>
                  Price: $19.99
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                className={classes.addButton}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} key={3}>
            <Box className={classes.card}>
              <Box
                className={classes.media}
                component="img"
                src={T3}
                alt="Recycled T-Shirt"
              />
              <Box>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.productName}
                >
                  Recycled T-Shirt
                </Typography>
                <Typography variant="body1" className={classes.productPrice}>
                  Price: $19.99
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                className={classes.addButton}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop;
