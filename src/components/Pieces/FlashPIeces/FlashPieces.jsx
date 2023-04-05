import React, { useState, useEffect } from "react";
import Container from "../components/Bits/Container/Container";

function FlashPieceOne() {
  const [card, setCard] = useState("");
  const [answer, setAnswer] = useState(false);

  const qa = [
    {
      question: "what is mars?",
      answer: "candy bars",
    },
    { question: "who is mars?", answer: "idk" },
  ];

  useEffect(() => {
    // const randomIndex = Math.floor(Math.random() * cards.length);
    // const randomCard = cards[randomIndex];
    // setCard(randomCard);

    newQuestion();
  }, []);

  const newQuestion = () => {
    const randomIndex = Math.floor(Math.random() * qa.length);
    const randomCard = qa[randomIndex];
    setCard(randomCard);
  };

  const toggleAnswer = () => {
    setAnswer(!answer);
  };

  return (
    <Container>
      <div>
        <div>Flash Card Page</div>
        {/* <div>{card}</div> */}
        <div>{card.question}</div>
        <button onClick={toggleAnswer}>show me the answer</button>
        <button onClick={newQuestion}>new question</button>
        {answer && <div>{card.answer}</div>}
      </div>
    </Container>
  );
}

export default FlashPieceOne;
