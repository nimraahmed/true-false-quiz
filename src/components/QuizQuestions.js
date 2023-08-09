import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const API_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean";

const QuizQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API_URL);
        setQuestions(response.data.results);
        setUserAnswers(new Array(response.data.results.length).fill(""));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleAnswerChange = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return <Navigate to="/results" state={{ userAnswers, questions }} />;
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <label>
            <input
              type="radio"
              name={`question${index}`}
              value="True"
              onChange={() => handleAnswerChange(index, "True")}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name={`question${index}`}
              value="False"
              onChange={() => handleAnswerChange(index, "False")}
            />
            False
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizQuestions;
