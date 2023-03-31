import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContextProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  return (
    <div>
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="username"
        variant="standard"
        fullWidth
        name="username"
        value={profile.username}
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1 }}
        id="standart-basic"
        label="bio"
        variant="standard"
        fullWidth
        name="bio"
        value={profile.bio}
        onChange={handleChange}
      />
      <Button type="submit" onClick={handleSave}>
        Edit Message
      </Button>
    </div>
  );
};

export default ProfileEdit;
