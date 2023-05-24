// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Recycled T-Shirt",
      image: "src/img/t1.jpg",
      price: 19.99,
    },
    {
      id: 4,
      name: "Recycled T-Shirt",
      image: "src/img/t2.png",
      price: 19.99,
    },
    {
      id: 6,
      name: "Recycled T-Shirt",
      image: "src/img/t3.jpg",
      price: 19.99,
    },
  ];

  return (
    <Box className={classes.root}>
      <Box width="100%">
        <Typography variant="h2" component="h1" className={classes.title}>
          Buy Our Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box className={classes.card}>
                <Box
                  className={classes.media}
                  component="img"
                  src={product.image}
                  alt={product.name}
                />
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.productName}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body1" className={classes.productPrice}>
                    Price: ${product.price.toFixed(2)}
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
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop;
