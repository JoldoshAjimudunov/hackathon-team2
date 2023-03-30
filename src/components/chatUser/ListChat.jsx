import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ChatUser from "./ChatUser";
import { Link } from "react-router-dom";
import { useChat } from "../contexts/ChatContextProvider";
import { useAuth } from "../contexts/AuthContextProvider";

const drawerWidth = "30%";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#EAEAEA",
  "&:hover": {
    backgroundColor: "#5468ff",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ListChat() {
  const { user, logout } = useAuth();

  const { messages } = useChat();

  const [blogUser, setBlogUser] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {blogUser == true ? (
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "#938888", p: 3, height: "100vh" }}
        >
          <div>hello</div>
        </Box>
      ) : (
        <ChatUser />
      )}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <AppBar sx={{ width: "30%", bgcolor: "white" }}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase inputProps={{ "aria-label": "search" }} />
            </Search>
            <ListItemButton>
              <MenuIcon sx={{ marginLeft: 5 }} color={"action"} />
            </ListItemButton>
            <Button
              onClick={() => logout()}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <List sx={{ bgcolor: "#EDDBDB", height: "100vh" }}>
          {[
            "user name",
            // "user name",
            // "user name",
            // "user name",
            // "user name",
            // "user name",
            // "user name",
            // "user name",
            // "user name",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar />
                </ListItemIcon>
                {/*<Link style={{ textDecoration: 'none' }} to={'chat_user'}>*/}
                <ListItemText
                  onClick={() => {
                    setBlogUser(false);
                  }}
                >
                  {text}
                  <Typography variant={"body2"}>hello</Typography>
                </ListItemText>
                {/*</Link>*/}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
