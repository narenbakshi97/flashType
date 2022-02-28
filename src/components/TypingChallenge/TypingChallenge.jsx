import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import WritingPart from "../WritingPart/WritingPart";
import "./TypingChallenge.css";

const TypingChallenge = ({
  characters,
  words,
  wpm,
  timeStarted,
  timeRemaining,
  selectedParagraph,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-container">
        {/* Wrods Typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        {/* Characters Type */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        {/* Speed */}
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      {/* The Challenge section */}
      <div className="typewriter-container">
        <WritingPart
          timeStarted={timeStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallenge;
