function App() {
  const myCustomLabel = <label htmlFor="inputId">sdsdd</label>;
  return (
    <div className="large" id="largeDiv">
      {myCustomLabel}
      <input id="inputId" type="number" defaultValuevalue={3} />
    </div>
  );
}

export default App;

// div with the class large and the id largeDiv with text Hi.
// Remove the text Hi
// Add a label with the for prop set to inputId and any text
// Add an input with the id inputId, type number, and value of 3 as a number
