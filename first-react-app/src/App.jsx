import { useState } from "react";

function App() {
  const [name, setName] = useState("xzh");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}

export default App;
