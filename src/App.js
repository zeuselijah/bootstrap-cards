import React from "react";
import "./styles.css";
//import card1
import Card from "./components/Card";

import cardArr from "./data";

export default function App() {
  const cards = cardArr.map((card) => <Card {...card} key={card.title} />);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{cards}</section>
    </div>
  );
}
