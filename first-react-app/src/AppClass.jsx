import React from "react";

export class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "xzh",
      age: 25,
    };
  }

  render() {
    const handleClick = () => {
      this.setState({ name: "xsy" });
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
    };
    return (
      <h1 onClick={handleClick}>
        Hi {this.state.name} {this.state.age}
      </h1>
    );
  }
}
