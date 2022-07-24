import * as React from "react";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Facebook } from "@material-ui/icons";
import { Group } from "@mui/icons-material";
import { HelpCenter } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Phone } from "@material-ui/icons";
import Toolbar from "@mui/material/Toolbar";
import { Twitter } from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
  backgroundColor: "#111840",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const useStyles = makeStyles((theme) => ({
  container: {
    height: 64,
  },
  linkText: {
    color: theme.palette.success.main,
    "&:hover": {
      color: theme.palette.success.dark,
    },
    textDecoration: "underline",
    fontSize: 18,
  },
  link: {
    textDecoration: "none",
  },
}));

/**
 * HeaderDrawer component
 */
export default function HeaderDrawer() {
  const navigate = useNavigate();

  const handleOnClick = (path: string) => {
    navigate(path);
  };

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const styles = useStyles();

  return (
    <Box sx={{ display: "flex" }} className={styles.container}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Personality +
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <div style={{ color: "#1b1d21", textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary={"Our team"} />
              </ListItemButton>
            </ListItem>
          </div>
          <div style={{ color: "#1b1d21", textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HelpCenter />
                </ListItemIcon>
                <ListItemText primary={"FAQs"} />
              </ListItemButton>
            </ListItem>
          </div>
          <div style={{ color: "#1b1d21", textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary={"Contact us"} />
              </ListItemButton>
            </ListItem>
          </div>
        </List>

        <Divider />
        <List>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1b1d21", textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Facebook />
                </ListItemIcon>
                <ListItemText primary={"Facebook"} />
              </ListItemButton>
            </ListItem>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1b1d21", textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Instagram />
                </ListItemIcon>
                <ListItemText primary={"Instragram"} />
              </ListItemButton>
            </ListItem>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1b1d21", textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Twitter />
                </ListItemIcon>
                <ListItemText primary={"Twitter"}></ListItemText>
              </ListItemButton>
            </ListItem>
          </a>
        </List>
      </Drawer>
    </Box>
  );
}
