import React from "react";
import TimeElapsedHeaderContainer from "../containers/TimeElapsedHeaderContainer";
import TimeElapsedButtonContainer from "../containers/TimeElapsedButtonContainer";
import TimeElapsedResetButtonContainer from "../containers/TimeElapsedResetButtonContainer";

const App = () => (
  <div>
    <TimeElapsedHeaderContainer />
    <TimeElapsedButtonContainer />
    <TimeElapsedResetButtonContainer />
  </div>
);

export default App;
