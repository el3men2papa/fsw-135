import React from "react";
import CSS from "../App.css"


const TimeElapsedActivateButton = ({ timer, onStartTimer, onStopTimer }) => {
  return timer.isRunning ? (
    <button className="stopbtn" onClick={() => onStopTimer()}>STOP</button>
  ) : (
    <button className= "startbtn" onClick={() => onStartTimer()}>START</button>
  );
};

export default TimeElapsedActivateButton;
