import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

//   const navItems = ["About", "Experience", "Projects", "Contact"];

  return (
    <AppBar position="static" style={{ backgroundColor: "#0b2447" }}>
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h5" component="div" style={{ fontWeight: "bold" }}>
          Sanauar Ansari
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            {/* for Mobile view */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box
                sx={{
                  width: 200,
                  background: "rgb(25,55,109)",
                  // background: `linear-gradient(180deg, #576cbc 0%, #132a53)`,
                  height: "100vh",
                  color: "white",
                }}
                role="presentation"
                onClick={toggleDrawer}
              >
                 <ListItem button component="a" href="#hero">
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="#about">
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component="a" href="#experience">
                  <ListItemText primary="Experience" />
                </ListItem>
                <ListItem button component="a" href="#projects">
                  <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button component="a" href="#contact">
                  <ListItemText primary="Contact" />
                </ListItem>
              </Box>
            </Drawer>
          </>
        ) : (
          // for desktop view
          <Box>
                <Button
              color="inherit"
              style={{ fontWeight: "bold", textTransform: "none" }}
              href="#hero"
            >
              Home
            </Button>
            <Button
              color="inherit"
              style={{ fontWeight: "bold", textTransform: "none" }}
              href="#about"
            >
              About
            </Button>
            <Button
              color="inherit"
              style={{ fontWeight: "bold", textTransform: "none" }}
              href="#experience"
            >
              Experience
            </Button>
            <Button
              color="inherit"
              style={{ fontWeight: "bold", textTransform: "none" }}
              href="#projects"
            >
              Projects
            </Button>
            <Button
              color="inherit"
              style={{ fontWeight: "bold", textTransform: "none" }}
              href="#contact"
            >
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
