import React, { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);

  function removeFirstElement() {
    setArray((currentArray) => currentArray.slice(1));
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) =>
      currentArray.filter((element) => element !== letter)
    );
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") {
          return "H";
        } else {
          return element;
        }
      });
    });
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("B")}>
        Remove Specific Letter B's
      </button>
      <br />
      <button onClick={() => addLetterToStart("X")}>Add X to start</button>
      <br />
      <button onClick={() => addLetterToEnd("Y")}>Add Y to end</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAToH}>Update A to H</button>
      <br />
      <button onClick={() => addLetterAtIndex("Z", 1)}>Add Z at index 1</button>
      <br />
      {array.join(",")}
    </div>
  );
}

export default App;
