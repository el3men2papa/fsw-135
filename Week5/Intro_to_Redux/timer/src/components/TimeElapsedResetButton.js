import React from "react";

const TimeElapsedResetButton = ({ onResetTimer }) => {
  return <button className="resetbtn" onClick={() => onResetTimer()}>RESET</button>;
};

export default TimeElapsedResetButton;
