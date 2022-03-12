import React from "react";
import Card from "./Card";
import journal from "./data";

export default function Main() {
  const cards = journal.map((item) => {
    return <Card item={item} />;
  });
  return <section className="main">{cards}</section>;
}
