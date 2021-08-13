import React from "react";
import "./Clock.css";

function Clock(props) {
  return (
    <div className="currentTime">
      <h4>Current Time</h4>
      <h1>{props.currentTime}</h1>
    </div>
  );
}

export default Clock;
