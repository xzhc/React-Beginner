import { useState } from "react";

export function FunctionComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

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
