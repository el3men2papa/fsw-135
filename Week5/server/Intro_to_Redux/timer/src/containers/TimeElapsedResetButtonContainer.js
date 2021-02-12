import TimeElapsedResetButton from "../components/TimeElapsedResetButton";
import { connect } from "react-redux";

const mapDispatchToTimeElapsedResetButtonProps = dispatch => ({
  onResetTimer: () => dispatch({ type: "RESET" }),
});

const TimeElapsedResetButtonContainer = connect(
  null,
  mapDispatchToTimeElapsedResetButtonProps
)(TimeElapsedResetButton);

export default TimeElapsedResetButtonContainer;
