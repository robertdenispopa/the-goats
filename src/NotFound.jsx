// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "65vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} onClick={goToHome}>
            <img
              src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=1060&t=st=1668885997~exp=1668886597~hmac=7c52f5c5a570e3f32958a2a4d42428ff19b21ac713e13a028a6e42c5f29cc573"
              alt=""
              width={800}
              height={800}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFound;
