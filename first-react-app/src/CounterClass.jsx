import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const handleClick = () => {
      this.setState((currentState) => {
        return { count: currentState.count + 1 };
      });
    };
    return <h1 onClick={handleClick}>{this.state.count}</h1>;
  }
}
