import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useChat } from "../contexts/ChatContextProvider";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "50px",
};
const EditMsg = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const { editMessage, oneMessage, getOneMessage } = useChat();

  const [message, setMessage] = useState(oneMessage);

  const params = useParams();

  useEffect(() => {
    function fetchOneMessage() {
      getOneMessage(params.id);
    }
    if (!params) {
      fetchOneMessage();
    }
  }, []);

  useEffect(() => {
    setMessage(oneMessage);
  }, [oneMessage]);

  console.log(oneMessage);
  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };
  console.log(message);
  function handleSave() {
    let formData = new FormData();
    formData.append("message", message.message);
    editMessage(params.id, formData);
  }
  return (
    <div>
      <Box
      // open={open}
      // onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit
          </Typography>
          <TextField
            sx={{ m: 1 }}
            id="standart-basic"
            label="message"
            variant="standard"
            fullWidth
            name="message"
            value={message.message}
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleSave} sx={{ color: "#ae3559" }}>
            Edit Message
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default EditMsg;
