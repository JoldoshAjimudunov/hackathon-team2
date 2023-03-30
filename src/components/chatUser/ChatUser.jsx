import React, { useEffect, useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Button, Grid, Menu, MenuItem, Paper } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MicIcon from "@mui/icons-material/Mic";
import { styled } from "@mui/material/styles";
import { useChat } from "../contexts/ChatContextProvider";
import ChatMsg from "./ChatMsg";
import Profile from "./Profile";
import { useSearchParams } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const ChatUser = () => {
  // ///////////////////////////////
  const { addMessages, getMessages, messages } = useChat();
  const [searchParams, setSearchParams] = useSearchParams();
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    getMessages();
  }, []);
  useEffect(() => {
    getMessages();
  }, [searchParams]);

  const [message, setMessage] = useState({
    message: "",
  });
  console.log(message);
  console.log(messages);
  // const memoArr = useMemo(() => messages, [messages]);

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    let formData = new FormData();
    formData.append("message", message.message);
    addMessages(formData);
  }
  // ///////////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ///////////////////////

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "#938888", p: 3, height: "500vh" }}
    >
      <AppBar sx={{ width: "100%", bgcolor: "white" }}>
        <Toolbar>
          <Box onClick={() => setProfile((current) => !current)}>
            <Avatar />
          </Box>
          <ListItemText sx={{ color: "#141414" }}>
            <Grid container>
              <Grid item ml={5} xs={6}>
                <Typography variant={"h6"}>User name</Typography>
                <Typography variant={"body2"}>в сети 2 часа назад</Typography>
              </Grid>
              <Grid item xs={1} textAlign={"center"}>
                <VideocamOutlinedIcon />
              </Grid>
              <Grid item xs={1}>
                <CallIcon />
              </Grid>
              <Grid item xs={1} ml={-5}>
                <MoreVertIcon onClick={handleClick} />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{ marginLeft: -15, marginTop: 5 }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
                    Поиск
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
                    Удалить чат
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
                    Сохранить контакт
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}>
                    Заблокировать
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </ListItemText>
        </Toolbar>
      </AppBar>
      {/* /////////////////// */}
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        {profile ? (
          <Profile />
        ) : (
          <Box>
            {messages
              ? messages.map((msg) => <ChatMsg key={msg.id} msg={msg} />)
              : console.log("something wrong")}
          </Box>
          // <ChatMsg />
        )}
      </Box>

      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, bgcolor: "#D9D9D9" }}
      >
        <Toolbar>
          <Grid container>
            <Grid item textAlign={"center"} p={1} xs={2}>
              <AttachFileIcon sx={{ color: "#292D32", marginLeft: 10 }} />
              <KeyboardArrowDownIcon sx={{ color: "#292D32", marginLeft: 5 }} />
            </Grid>
            <Grid item xs={6}>
              <input
                style={{
                  width: 630,
                  height: 40,
                  borderRadius: 35,
                  borderColor: "#D9D9D9",
                }}
                name="message"
                value={message.message}
                onChange={handleChange}
              />
              <Button type="submit" onClick={handleSave}>
                add
              </Button>
            </Grid>
            <Grid item xs={1}>
              <MicIcon sx={{ color: "#292D32", margin: 1 }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* /////////////////// */}
    </Box>
  );
};

export default ChatUser;
