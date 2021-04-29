import React from "react";
import "./AtRestroom.css";

function AtRestroom(props) {
  return (
    <div className="atRestroom">
      <div className="atRestroomName">
        <h3>{props.fName} {props.lName}</h3>
      </div>
      <div className="manage">
        <div className="time-stamp"><span style={{color: 'gray'}}>Out at:  </span>{props.time?.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit"
        })}</div>
        <button className="btn-green" onClick={props.handleClick}>
          Returned
        </button>
      </div>
    </div>
  );
}

export default AtRestroom;
