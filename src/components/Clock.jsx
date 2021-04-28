import React from "react";
import "./Clock.css";

function Clock(props) {
  return (
    <div className="currentTime">
      <h2>Current Time</h2>
      <p>{props.currentTime}</p>
    </div>
  );
}

export default Clock;
