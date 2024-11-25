//  styling with in object
function App() {
  return (
    // empty element <></>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
function Card() {
  return (
    <div
      style={{
        width: "200px",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      <img src="https://picsum.photos/200" alt="card" />
      <h1>heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        perspiciatis vel facilis esse suscipit quisquam.
      </p>
    </div>
  );
}

export default App;
