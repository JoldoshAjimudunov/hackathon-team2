import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { useChat } from "../contexts/ChatContextProvider";
import { API_MESSAGES } from "../../const";
import axios from "axios";

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
  // const msgs = axios.get(`${API_MESSAGES}`);

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
            <Button
              display="flex"
              justifyContent="right"
              size="small"
              onClick={() => deleteMessage(msg.id)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </StyledPaper>
    </div>
  );
};

export default ChatMsg;
