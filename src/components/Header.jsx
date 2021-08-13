import React from "react";
import "./Header.css";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Clock from "./Clock";

function Header({ currentTime }) {
  return (
    <div className="header">
      <div className="title">
        <AssignmentTurnedInIcon style={{ fontSize: 75 }} />
        <h1 className="header-title">Eye-on</h1>
        <Clock currentTime={currentTime} />
      </div>
    </div>
  );
}

export default Header;
