import React from "react";
import { DisplayString } from "./DisplayString";

export class ClassChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
    this.handleDocumentClick = () => {
      console.log(this.state.name);
    };
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  componentDidUpdate() {
    // if (prevState.name !== this.state.name) {
    //   document.removeEventListener("click", this.handleDocumentClick);
    //   document.addEventListener("click", this.handleDocumentClick);
    // }
    document.title = this.state.name;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((currentState) => {
              return { age: currentState.age - 1 };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((currentState) => {
              return {
                age: currentState.age + 1,
              };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        <DisplayString name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}
