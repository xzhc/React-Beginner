import { useEffect, useState } from "react";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //console.log the text Render each time the component re-renders
  // useEffect(() => {
  //   console.log("Render");
  // });
  //console.log the text Hi when the component mounts
  //console.log the text Bye when the component unmounts
  // useEffect(() => {
  //   console.log("Hi");

  //   return () => {
  //     console.log("Bye");
  //   };
  // }, []);
  //console.log the text My name is {name} and I am {age} years old whenever the name or age changes
  // useEffect(() => {
  //   console.log(`My name is ${name} and I am ${age} years old`);
  // }, [name, age]);

  //Update the document.title to be equal to name whenever the name changes
  // useEffect(() => {
  //   document.title = name;
  // }, [name]);

  //Create a timeout that console.logs the text My name is {name} only after there has been a 1 second delay since the last time the name was changed.
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((currentage) => currentage - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentage) => currentage + 1)}>+</button>
      <br />
      <br />
      My name is {name}, and I am {age} years old.
    </div>
  );
}
