import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContextProvider";

const UserProfiles = ({ prof }) => {
  const {} = useProfile();
  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h5">{prof?.username}</Typography>
          <Typography>{prof?.bio}</Typography>
        </Box>
        <Link to={`/editprofile/${prof?.id}`}>
          <Button sx={{ color: "#ae3559" }}>Edit</Button>
        </Link>
      </Box>
    </div>
  );
};

export default UserProfiles;
