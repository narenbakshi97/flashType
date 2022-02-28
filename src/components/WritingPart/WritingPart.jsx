import React from "react";
import "./WritingPart.css";
import TestLetter from "../TestLetter/TestLetter";

const WritingPart = ({
  timeStarted,
  timeRemaining,
  testInfo,
  onInputChange,
}) => {
  console.log({ testInfo });
  return (
    <div className="writing-part">
      <div className="timer-container">
        <p className="timer">
          00:
          {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {!timeStarted && "Start typing to start the test"}
        </p>
      </div>

      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {testInfo.map((individualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Start typing here"
            className="textarea"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default WritingPart;
