import React from "react";

export class ClassChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
    this.timeout = null;
  }

  //console.log the text Render each time the component re-renders
  componentDidMount() {
    console.log("Render");
    //console.log the text Hi when the component mounts
    console.log("Hi");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Render");
    //console.log the text My name is {name} and I am {age} years old whenever the name or age changes
    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(
        `My name is ${this.state.name} and I am ${this.state.age} years old`
      );
    }

    //Update the document.title to be equal to name whenever the name changes
    if (prevState.name !== this.state.name) {
      document.title = this.state.name;
      //Create a timeout that console.logs the text My name is {name} only after there has been a 1 second delay since the last time the name was changed

      //clean old timeout
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      //set new timeout
      this.timeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`);
      }, 1000);
    }
  }

  //console.log the text Bye when the component unmounts
  componentWillUnmount() {
    console.log("Bye");
    //clean timeout
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }
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
        My name is {this.state.name}, and I am {this.state.age} years old.
      </div>
    );
  }
}
