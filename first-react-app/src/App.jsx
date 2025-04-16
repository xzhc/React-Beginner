// import { useState } from "react";
import { AppClass } from "./AppClass";
import { CounterClass } from "./CounterClass";
// function slowGetter() {
//   console.log("State getter");
//   return "xzh";
// }

function App() {
  // const [name, setName] = useState("xzh");
  // const [age, setAge] = useState(25);
  // const [person, setPerson] = useState({ name: "xzh", age: 25 });
  // function handleClick() {
  //   // console.log("Age:", age);
  //   //setName("xsy");
  //   //setAge((currentAge) => currentAge + 1);
  //   //console.log("Age:", age);
  //   //setAge((currentAge) => currentAge + 1);
  //   setPerson({ ...person, name: "xsy" });
  // }
  return (
    // <h1 onClick={handleClick}>
    //   {person.name} {person.age}
    // </h1>
    // <Counter />
    <>
      <AppClass />
      <CounterClass />
    </>
  );
}

export default App;

//Create a new component called counter
//have a state for a counter that starts at 0 and render that in the jsx
//When you click the number increment it by 1
