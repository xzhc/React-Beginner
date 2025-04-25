import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item1" },
    { id: crypto.randomUUID(), name: "Item2" },
  ]);
  function addItem() {
    setItems((currentItems) => {
      return [...currentItems, { id: crypto.randomUUID(), name: "New Item" }];
    });
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map((item) => (
          <div key={item.id}>
            {item.name}
            <input type="text" />
          </div>
        ))}
      </pre>
    </div>
  );
}

export default App;
