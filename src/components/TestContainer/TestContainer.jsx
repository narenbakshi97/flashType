import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TestContainer.css";

const TestContainer = ({
  characters,
  words,
  wpm,
  timeStarted,
  timeRemaining,
  selectedParagraph,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-cont">
          <TypingChallenge
            timeRemaining={timeRemaining}
            timeStarted={timeStarted}
            selectedParagraph={selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain
            startAgain={startAgain}
            words={words}
            characters={characters}
            wpm={wpm}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
