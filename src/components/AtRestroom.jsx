import React from "react";
import "./AtRestroom.css";

function AtRestroom(props) {
  return (
    <div className="atRestroom">
      <div className="atRestroomName">
        <h3>{props.fName}</h3>
      </div>
      <div className="manage">
        <div className="btn-red">{props.time?.toLocaleTimeString()}</div>
        <button className="btn-green" onClick={props.handleClick}>
          Returned
        </button>
      </div>
    </div>
  );
}

export default AtRestroom;
