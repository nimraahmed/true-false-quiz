import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { userAnswers, questions } = location.state || {};

  if (!userAnswers || !questions) {
    return <Navigate to="/" />;
  }

  const score = questions.filter(
    (question, index) => userAnswers[index] === question.correct_answer
  ).length;

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>
        Your Score: {score} / {questions.length}
      </p>
      <h3>Answers:</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            <p>Your Answer: {userAnswers[index]}</p>
            <p>Correct Answer: {question.correct_answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
