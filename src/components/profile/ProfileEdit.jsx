import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContextProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const ProfileEdit = () => {
  const { editProfile, oneProfile, getOneProfile } = useProfile();

  const [profile, setProfile] = useState(oneProfile);

  const params = useParams();

  useEffect(() => {
    function fetchOneProfile() {
      getOneProfile(params.id);
    }
    if (!params) {
      fetchOneProfile();
    }
  }, []);

  useEffect(() => {
    setProfile(oneProfile);
  }, [oneProfile]);

  console.log(oneProfile);
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  console.log(profile);
  function handleSave() {
    let formData = new FormData();
    formData.append("username", profile.username);
    formData.append("bio", profile.bio);
    editProfile(params.id, formData);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
    borderRadius: "30px",
  };
  return (
    <div>
      <Box style={style}>
        <TextField
          sx={{ m: 3, width: "400px" }}
          id="standart-basic"
          label="username"
          variant="standard"
          fullWidth
          name="username"
          value={profile.username}
          onChange={handleChange}
        />
        <TextField
          sx={{ m: 3, width: "400px" }}
          id="standart-basic"
          label="bio"
          variant="standard"
          fullWidth
          name="bio"
          value={profile.bio}
          onChange={handleChange}
        />
        <Button
          sx={{
            color: "black",
            background: "#ae3559",
            borderRadius: "60px",
            color: "#ffffff",
            cursor: "pointer",
            border: "none",
            margin: "20px",
          }}
          type="submit"
          onClick={handleSave}
        >
          Edit Message
        </Button>
      </Box>
    </div>
  );
};

export default ProfileEdit;
