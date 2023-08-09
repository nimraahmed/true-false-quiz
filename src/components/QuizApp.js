import React from "react";
import { Routes, Route } from "react-router-dom";
import QuizQuestions from "./QuizQuestions";
import Results from "./Results";

const QuizApp = () => {
  return (
    <div>
      <h1>True or False Quiz</h1>
      <Routes>
        <Route path="/" element={<QuizQuestions />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
};

export default QuizApp;
