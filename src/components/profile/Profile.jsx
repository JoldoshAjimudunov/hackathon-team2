import { Grid, Typography } from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContextProvider";
import UserProfiles from "./UserProfiles";

const Profile = () => {
  const { getProfiles, profiles, editProfile } = useProfile();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    getProfiles();
  }, []);
  useEffect(() => {
    getProfiles();
  }, [searchParams]);
  console.log(profiles);

  const [profile, setProfile] = useState({
    username: "",
    bio: "",
  });

  // let formData = new FormData();
  // formData.append("username", profile.username);
  // formData.append("bio", profile.bio);
  // editProfile(params.id, formData);
  // console.log(message);
  // console.log(messages);
  // const memoArr = useMemo(() => messages, [messages]);

  // const handleChange = (e) => {
  //   setMessage({
  //     ...message,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // function handleSave() {
  //   let formData = new FormData();
  //   formData.append("message", message.message);
  //   addMessages(formData);
  // }
  return (
    <Box>
      <Box
        sx={{
          height: "200px",
          bgcolor: "#938888",
          display: "flex",
          //  justifyContent: "center",
          alignItems: "end",
          p: "0 0 0 200px ",
        }}
      >
        <Typography variant="h3" component="h3">
          Участники
        </Typography>
      </Box>

      <Box sx={{ height: "1400px", p: 2, borderRadius: 5, bgcolor: "white" }}>
        {profiles
          ? profiles.map((prof) => <UserProfiles key={prof.id} prof={prof} />)
          : console.log("something wrong")}
      </Box>

      <UserProfiles />
    </Box>
  );
};

export default Profile;
