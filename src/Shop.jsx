// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    height: "80vh", // Set the height to full screen
    display: "flex", // Use flexbox to fill the screen vertically
    alignItems: "center", // Center the content vertically
    justifyContent: "center", // Center the content horizontally
    position: "fixed",
    left: 0,
    width: "100%",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  card: {
    paddingTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    justifyContent: "space-between",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "100%",
    backgroundSize: "contain",
  },
}));

const Shop = () => {
  const classes = useStyles();

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Recycled T-Shirt",
      image: "/images/t-shirt.jpg",
      price: 19.99,
    },
    {
      id: 2,
      name: "Upcycled Backpack",
      image: "/images/backpack.jpg",
      price: 34.99,
    },
    {
      id: 3,
      name: "Upcycled Backpack",
      image: "/images/backpack.jpg",
      price: 34.99,
    },
    {
      id: 4,
      name: "Upcycled Backpack",
      image: "/images/backpack.jpg",
      price: 34.99,
    },
    {
      id: 5,
      name: "Recycled T-Shirt",
      image: "/images/t-shirt.jpg",
      price: 19.99,
    },
    {
      id: 6,
      name: "Recycled T-Shirt",
      image: "./img/Donations.jpeg",
      price: 19.99,
    },
  ];

  return (
    <Box className={classes.root}>
      <Box width="90%">
        <Typography variant="h2" component="h1" className={classes.title}>
          Shop Our Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body1">
                    Price: ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop;
