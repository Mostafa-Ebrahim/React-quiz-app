import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import React from "react";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswersState, setUserAnswersState] = useState([]);

  const activeQuestionIdx = userAnswersState.length;
  const quizCompleted = userAnswersState.length === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswersState((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizCompleted) {
    return <Summary userAnswers={userAnswersState}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIdx}
        index={activeQuestionIdx}
        onSelect={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
