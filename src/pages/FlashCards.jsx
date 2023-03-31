import React, { useState, useEffect } from "react";
import Container from "../components/Bits/Container/Container";
function FlashCards() {
  const [card, setCard] = useState("");

  useEffect(() => {
    const cards = [
      "definition 1",
      "definition 2",
      "definition 3",
      "definition 4",
      "definition 5",
      "definition 6",
      "definition 7",
      "definition 8",
      "definition 9",
      "definition 10",
      "definition 11",
    ];

    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    setCard(randomCard);
  }, []);

  return (
    <Container>
      <div>
        <div>Flash Card Page</div>
        <div>{card}</div>
      </div>
    </Container>
  );
}

export default FlashCards;
