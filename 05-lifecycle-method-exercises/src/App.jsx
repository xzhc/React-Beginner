import { useState } from "react";
import { ClassChild } from "./ClassChild";
function App() {
  const [show, setShow] = useState(true);
  const childComponent = show ? <ClassChild /> : null;
  return (
    <div>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        toggle/hide
      </button>
      <br />
      <br />
      {childComponent}
    </div>
  );
}

export default App;
