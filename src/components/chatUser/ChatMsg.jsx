import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { useChat } from "../contexts/ChatContextProvider";
import { API_MESSAGES } from "../../const";
import axios from "axios";
import EditMsg from "./EditMsg";
import { Link, useNavigate } from "react-router-dom";

const ChatMsg = ({ msg }) => {
  const { deleteMessage } = useChat();
  const { messages } = useChat();

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 700,
    color: theme.palette.text.primary,
  }));
  // const editPage = () => {
  //   navigate("/edit/:id");
  // };
  const navigate = useNavigate();
  return (
    <div>
      <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "40%",
          borderRadius: 35,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {/* <Box>
              {messages?.map((item) => (
                <Typography key={item.id} item={item} />
              ))}
            </Box> */}
            {/* <Typography noWrap>{msgs}</Typography> */}
            <Typography noWrap>{msg.message}</Typography>
            <Box display="flex" justifyContent="start">
              <Button
                display="flex"
                justifyContent="center"
                size="small"
                onClick={() => deleteMessage(msg.id)}
              >
                Delete
              </Button>
              <Link to={`/edit/${msg.id}`}>
                <Button>Edit</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </StyledPaper>
    </div>
  );
};

export default ChatMsg;
