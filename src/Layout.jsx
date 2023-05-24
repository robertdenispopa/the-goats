import { Outlet } from "react-router-dom";
import { Menu, Footer } from "./Navigation";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#7b9ac0" },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Menu />
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
export default Layout;
