import React, {useState, useEffect} from "react";
class Timer extends Component {
    state = {
      status: false,
      runningTime: 0
    };
    handleClick = () => {
      this.setState(state => {
        if (state.status) {
          clearInterval(this.timer);
        } else {
          const startTime = Date.now() - this.state.runningTime;
          this.timer = setInterval(() => {
            this.setState({ runningTime: Date.now() - startTime * 1000 });
          });
        }
        return { status: !state.status };
      });
    };
    handleReset = () => {
      this.setState({ runningTime: 0, status: false });
    };
    render() {
      const { status, runningTime } = this.state;
      return (
        <div>
          <p>{runningTime}ms</p>
          <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    }
    handleReset = () => {
        clearInterval(this.timer); 
        this.setState({ runningTime: 0, status: false });
      };
  }

