import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNewsArticles } from "./api";

let x = 0;

function App() {
  const { loading, headlines, error } = useNewsArticles();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      {headlines.map(headline => (
        <Headline key={headline.url} title={headline.title} />
      ))}
    </div>
  );
}

function Headline(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(oldCount => oldCount + 1);
  };

  const decrement = () => {
    setCount(oldCount => oldCount - 1);
  };

  const superIncrement = () => {
    if (x < 2) {
      setCount(oldCount => oldCount + 10);
      x++;
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <button onClick={superIncrement}>Super Like</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
