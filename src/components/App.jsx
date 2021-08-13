import React, { useEffect, useState } from "react";
import Card from "./card";
import Enrolled from "./Enrolled.jsx";
import AtRestroom from "./AtRestroom.jsx";
import Header from "./Header.jsx";
import namesData from "../names.js";
import Footer from "./Footer";

function App() {
  const [names, updateNames] = useState(namesData);

  function updateStatus(id, newStatus) {
    const newNames = names.map((name) => {
      if (name.id === id) {
        name.status = newStatus;
        name.lastUpdated = new Date();
      }
      return name;
    });

    updateNames(newNames);
  }

  const [cTime, setTime] = useState(
    new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
  });

  return (
    <div className="page">
      {/* <Clock classname="currentTime" currentTime={cTime} /> */}
      <div className="top">
        <Header currentTime={cTime} />
      </div>
      <div className="sidebar">
        <div className="enrolledList">
          <h2>Enrolled:</h2>
          <hr></hr>
          {names
            .filter((person) => person.status === "absent")
            .map((person) => (
              <Enrolled
                fName={person.fName}
                lName={person.lName}
                id={person.id}
                handleClick={() => updateStatus(person.id, "present")}
              />
            ))}
        </div>
        <div className="restroom-list">
          <h2>At Restroom:</h2>
          <hr></hr>
          {names
            .filter((person) => person.status === "restroom")
            .map((person) => (
              <AtRestroom
                fName={person.fName}
                lName={person.lName}
                id={person.id}
                time={person.lastUpdated}
                handleClick={() => updateStatus(person.id, "present")}
              />
            ))}
        </div>
      </div>
      <div className="currently-in">
        <h2>Present:</h2>
        <div className="card-area">
          {names
            .filter((person) => person.status === "present")
            .map((person) => (
              <Card
                key={person.id}
                id={person.id}
                fName={person.fName}
                lName={person.lName}
                level={person.level}
                avatar={person.avatar}
                handleClick={() => updateStatus(person.id, "absent")}
                toBathroom={() => updateStatus(person.id, "restroom")}
              />
            ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
