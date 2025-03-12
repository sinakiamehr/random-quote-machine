import React, { useState } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const onClickHandler = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error("Error fetching the quote:", error));
  };

  return (
    <div className="quote-box" id="quote-box">
      <p className="quote-text" id="text">
        "{quote}""
      </p>
      <p className="quote-author" id="author">
        -{author}
      </p>
      <button className="new-btn" id="new-quote" onClick={onClickHandler}>
        Generate New Quote
      </button>
      <div className="social-media">
        <a
          className="tweet-a"
          target="_blank"
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          style={{ backgroundColor: "#1da1f2" }}
        >
          Tweet this quote
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
