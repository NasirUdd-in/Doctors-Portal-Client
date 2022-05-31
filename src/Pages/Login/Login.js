import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import login from "../../../images/login.png";

const Login = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            {/* <img style={{ width: "100%" }} src={login} alt="" /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
