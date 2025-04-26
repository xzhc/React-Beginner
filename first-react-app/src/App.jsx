//import { useState, Fragment } from "react";

const CUSTOM_HTML = `<h1>Hi</h1><div>My name is xzh</div>`;
function App() {
  // const [items, setItems] = useState([
  //   { id: crypto.randomUUID(), name: "Item1" },
  //   { id: crypto.randomUUID(), name: "Item2" },
  // ]);
  // function addItem() {
  //   setItems((currentItems) => {
  //     return [...currentItems, { id: crypto.randomUUID(), name: "New Item" }];
  //   });
  // }
  // return (
  //   <>
  //     <button onClick={addItem}>Add Item</button>
  //     <pre>
  //       {items.map((item) => {
  //         return (
  //           <Fragment key={item.id}>
  //             <span>Hi</span>
  //             <div>{item.name}</div>
  //           </Fragment>
  //         );
  //       })}
  //     </pre>
  //   </>

  // );
  return <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>;
}

export default App;
