import { useEffect } from "react";
import { useState } from "react";
import { DisplayString } from "./DisplayString";

export function Child({ favoriteNumber }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  // const person = { name };
  //const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   console.log("Age changed", age);
  // }, [age]);

  // useEffect(() => {
  //   console.log("Name changed", name);
  // }, [name]);

  // useEffect(() => {
  //   console.log("Mount");
  // }, []);

  // useEffect(() => {
  //   document.title = name;
  // }, [name]);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWidth(window.innerWidth);
  //   });
  // }, []);
  // const handler = () => {
  //   console.log("name changed", name);
  // };
  // useEffect(() => {
  //   document.addEventListener("click", handler);
  //   console.log("inside effect");
  //   return () => {
  //     document.removeEventListener("click", handler);
  //     console.log("inside cleanup");
  //   };
  // }, [name]);
  // useEffect(() => {
  //   console.log(person);
  // }, [person]);

  useEffect(() => {
    document.title = name;
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
      {favoriteNumber !== undefined &&
        `My favorite Number is ${favoriteNumber}`}
      <br />
      <DisplayString name={name} age={age} />
      {/* {width} */}
    </div>
  );
}
