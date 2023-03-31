import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContextProvider";

const UserProfiles = ({ prof }) => {
  const {} = useProfile();
  return (
    <div>
      <Typography>{prof?.username}un</Typography>
      <Typography>{prof?.bio}bio</Typography>
      <Link to={`/editprofile/${prof?.id}`}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
};

export default UserProfiles;
