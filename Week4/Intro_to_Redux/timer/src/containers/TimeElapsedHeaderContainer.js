import TimeElapsedHeader from "../components/TimeElapsedHeader";
import { connect } from "react-redux";

const mapStateToTimeElapsedHeaderProps = state => {
  return {
    timer: state.timer,
  };
};
const TimeElapsedHeaderContainer = connect(mapStateToTimeElapsedHeaderProps)(
  TimeElapsedHeader
);

export default TimeElapsedHeaderContainer;
