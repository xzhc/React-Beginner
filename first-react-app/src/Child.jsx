import { useEffect } from "react";
import { useState } from "react";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const person = { name };
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
  useEffect(() => {
    console.log(person);
  }, [person]);
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
      {/* {width} */}
    </div>
  );
}
