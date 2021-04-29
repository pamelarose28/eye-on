import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import "./Enrolled.css";

function Enrolled(props) {
  return (
    <div className="enrolled">
      <button className="check" onClick={props.handleClick}>
        <CheckIcon />
      </button>
      <div className="enrolledName">{props.fName} {props.lName}</div>
    </div>
  );
}

export default Enrolled;
