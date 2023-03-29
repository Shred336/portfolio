import React, { useEffect, useState } from "react";
import Box from "./Box";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://api.quotable.io/random?author=aleksander%20solzhenitsyn"
      );
      const data = await response.json();
      setQuote(data.content);
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box textStyles={{ fontSize: "20pt", fontFamily: "Helvetica" }}>
      {quote}
    </Box>
  );
}

export default Quote;
