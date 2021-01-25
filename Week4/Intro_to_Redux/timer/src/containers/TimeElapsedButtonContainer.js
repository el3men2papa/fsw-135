import TimeElapsedActivateButton from "../components/TimeElapsedActivateButton";
import { connect } from "react-redux";
const mapStateToTimeElapsedActivateButtonProps = state => ({
  timer: state.timer,
});
const mapDispatchToTimeElapsedActivateButtonProps = dispatch => ({
  onStartTimer: () => {
    dispatch({ type: "START" });
  },
  onStopTimer: () => {
    dispatch({ type: "STOP" });
  },
});

const TimeElapsedButtonContainer = connect(
  mapStateToTimeElapsedActivateButtonProps,
  mapDispatchToTimeElapsedActivateButtonProps
)(TimeElapsedActivateButton);

export default TimeElapsedButtonContainer;
