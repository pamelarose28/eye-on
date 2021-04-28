import React from "react";
import "./Header.css";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Clock from "./Clock";

function Header({ currentTime }) {
  return (
    <div className="header">
      <div className="title">
        <AssignmentTurnedInIcon style={{ fontSize: 85 }} />
        <h1>Eye-on</h1>
        <Clock currentTime={currentTime} />
      </div>
      <div className="dash">
        <h4>Area: POOL </h4>
        <h4>Period: 3 </h4>
        <h4>Time: 1:45 - 2:30 </h4>
      </div>
    </div>
  );
}

export default Header;
