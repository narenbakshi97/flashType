import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <div className="result-container">
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>Words:</b> {words}
        </p>
        <p>
          <b>Speed:</b> {wpm} wpm
        </p>
      </div>

      <div>
        <button
          onClick={() => startAgain()}
          className="end-btn start-again-btn"
        >
          Re-try
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com/shareer/sharer.php?u=narenbakshi97.github.io/naren/",
              "facebook-share-dialog",
              "width=800,height=600"
            );
          }}
          className="end-btn f-share-btn"
        >
          Share
        </button>
        <button
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=narenbakshi97.github.io/naren/",
              "twitter",
              "width=800,height=600"
            );
          }}
          className="end-btn tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
