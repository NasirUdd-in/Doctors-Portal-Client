import React from "react";

const AvailableAppointment = ({date}) => {
  return (
    <div>
      <h1>Available Appointments: {date.toDateString()}</h1>
    </div>
  );
};

export default AvailableAppointment;




