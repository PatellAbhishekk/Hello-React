import React from "react";

function App() {
  return (
    console.log("Hello React"),
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Card
          title="flutter"
          description="React Native is a framework for building native apps using React. It allows you to use your existing React skills and libraries to build apps for iOS and Android."
          src="https://img.icons8.com/?size=28&id=GTunOHQmqTgt&format=png"
        />
        <Card
          title="React "
          description="React Elements is a collection of UI components that can be used to build React apps. It provides a set of reusable components that cover common UI elements like buttons, forms, and navigation."
          src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png"
        />
      </div>
    )
  );
}

function Card({ title, description, src }) {
  // const title = props.title;
  // const description = props.description;
  //   const { title, description } = props;
  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid black",
        padding: "20px",
        width: "300px",
      }}
    >
      <h1>{title}</h1>
      <img src={src} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default App;
