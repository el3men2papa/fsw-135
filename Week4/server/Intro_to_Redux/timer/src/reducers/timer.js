const timer = (state = {}, action) => {
    switch (action.type) {
      case "START":
        return { isRunning: true };
      case "STOP":
        return { isRunning: false };
      case "RESET":
        return { isRunning: false, reset: true };
      default:
        return state;
    }
  };
  
  export default timer;
  