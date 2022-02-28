import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = ({
  testInfo,
  characters,
  words,
  wpm,
  timeStarted,
  timeRemaining,
  selectedParagraph,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="challengeSection-container">
      <h1 data-aos="fade-down" className="challengeSection-header">
        Take a speed test now!
      </h1>
      <TestContainer
        timeStarted={timeStarted}
        timeRemaining={timeRemaining}
        selectedParagraph={selectedParagraph}
        characters={characters}
        words={words}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
