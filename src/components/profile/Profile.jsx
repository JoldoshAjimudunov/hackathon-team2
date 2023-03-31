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
          имя пользователя
        </Typography>
      </Box>

      <Box>
        {profiles
          ? profiles.map((prof) => <UserProfiles key={prof.id} prof={prof} />)
          : console.log("something wrong")}
      </Box>

      <UserProfiles />
    </Box>
  );
};

export default Profile;

{
  /* <Box sx={{ height: "500px", bgcolor: "white", ml: "-30px" }}>
        <Box>
          <Typography sx={{ m: "50px 0 50px 200px", width: "200px" }}>
            +996 500 500 500
          </Typography>
        </Box>
        <Grid container>
          <Grid
            container
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Typography>bio</Typography>
            <Typography
              sx={{ width: "100px", height: "4px", color: "black" }}
            />
          </Grid>
          <Grid
            container
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>links</Typography>
          </Grid>
          <Grid
            container
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>docs</Typography>
          </Grid>
        </Grid>
      </Box> */
}
{
  /* /////// */
}
