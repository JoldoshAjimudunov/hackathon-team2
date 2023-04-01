import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { useChat } from "../contexts/ChatContextProvider";
import { API_MESSAGES } from "../../const";
import axios from "axios";
import EditMsg from "./EditMsg";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

const ChatMsg = ({ msg }) => {
  const { deleteMessage } = useChat();
  const { messages } = useChat();
  ///////////////////////////////

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 800,
    color: theme.palette.text.primary,
  }));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // //////////////////////

  // const editPage = () => {
  //   navigate("/edit/:id");
  // };

  const style = {
    position: "absolute",
    top: "50%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "40px",
  };
  const navigate = useNavigate();
  return (
    <Box>
      <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,

          right: "30px",
          height: "auto",
          marginTop: "5%",
          marginBottom: "5%",
          marginLeft: "20%",
          borderRadius: 35,
        }}
        onClick={handleOpen}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography noWrap>{msg.message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="center">
            <Button
              display="flex"
              justifyContent="center"
              size="small"
              onClick={() => deleteMessage(msg.id)}
              sx={{ color: "#ae3559" }}
            >
              Delete
            </Button>
            <Link to={`/edit/${msg.id}`}>
              <Button sx={{ color: "#ae3559" }}>Edit</Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ChatMsg;
