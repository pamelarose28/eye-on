import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import WcIcon from "@material-ui/icons/Wc";
import "./card.css";

function Card(props) {

  return (
    <div className="container">
      <div className="delete">
        <button className="present" onClick={props.handleClick}>
          <ClearIcon />
        </button>
      </div>
      <div className="heading">
        <div className={"photo " + props.level}>
          <img src={props.avatar} alt="" />
        </div>
        <div className="name">
          {props.fName} {props.lName}
        </div>
      </div>
      <div className="status">
        <button className="bathroom" onClick={props.toBathroom}>
          <WcIcon />
        </button>
      </div>
    </div>
  );
}

export default Card;
