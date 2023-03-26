import { Grid, Typography } from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import React from "react";

const Profile = () => {
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
          <Typography>media</Typography>
          <Typography sx={{ width: "100px", height: "4px", color: "black" }} />
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
    </Box>
  );
};

export default Profile;
