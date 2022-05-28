import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "../../Shared/Calendar/Calendar";

const AppointmentHeader = ({date, setDate}) => {
  
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid xs={12} md={6}>
            <img style={{ width: "100%" }} src={chair}></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AppointmentHeader;
