import React from "react";

const formattedSeconds = sec =>
  ("0" + Math.floor((sec % 3600) / 60)).slice(-2) +
  ":" +
  ("0" + (sec % 60)).slice(-2);

export default class TimeElapsedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
    this.incrementer = null;
  }

  startTimer() {
    this.incrementer = setInterval(() => {
      this.setState(prevState => ({
        secondsElapsed: prevState.secondsElapsed + 1,
      }));
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.incrementer);
  }

  resetTimer() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
    });
    //this.incrementer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.timer.isRunning !== prevProps.timer.isRunning) {
      if (this.props.timer.isRunning) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }

    if (this.props.timer.reset !== prevProps.timer.reset) {
      if (this.props.timer.reset) {
        this.resetTimer();
      }
    }
  }

  render() {
    return <h1 className= "time">{formattedSeconds(this.state.secondsElapsed)}</h1>;
  }
}
